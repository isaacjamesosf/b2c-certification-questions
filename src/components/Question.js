import { useCallback, useState } from "react";
import { Box, ListItem, ListItemText } from "@material-ui/core";
import { Label, InputRadio } from "./Styled";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Question = ({
  questionNumber,
  question,
  onSelectOption,
  showAnswers,
}) => {
  const totalAnswers = question.answer.split(",").length;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelectOptionHandle = useCallback(
    (questionNumber, option) => {
      if (selectedOptions.includes(option)) {
        const newSelectedOptions = selectedOptions.filter(
          (opt) => opt !== option
        );
        setSelectedOptions(newSelectedOptions);
        onSelectOption(questionNumber, newSelectedOptions);
      }
      if (totalAnswers < 2) {
        onSelectOption(questionNumber, [option]);
        setSelectedOptions([option]);
      } else if (totalAnswers !== selectedOptions.length) {
        setSelectedOptions(() => {
          onSelectOption(questionNumber, [...selectedOptions, option]);
          return [...selectedOptions, option];
        });
      }
    },
    [onSelectOption, selectedOptions, totalAnswers]
  );

  return (
    <div id={Number(questionNumber)}>
      <Box bgcolor="#3f51b5" color="#fff" left={true} mt={4} border={1}>
        <ListItem align="left">
          <ListItemText
            primary={`${questionNumber}) - ${question.description}`}
            secondary={`${totalAnswers < 2 ? "" : `Pick ${totalAnswers}`}`}
            secondaryTypographyProps={{ color: "white" }}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </ListItem>
      </Box>
      {Object.keys(question.options).map((option) => (
        <div key={option}>
          <Label>
            {option})
            <InputRadio
              type="radio"
              checked={selectedOptions.includes(option)}
              onClick={() => onSelectOptionHandle(questionNumber, option)}
            />
            {question.options[option]}
          </Label>
        </div>
      ))}
      <ListItem>
        {showAnswers ? (
          <>
            <ListItemText
              secondary={
                question.answer
                  .split(",")
                  .every((x) => selectedOptions.some((y) => y === x))
                  ? "Correct"
                  : `The answer is: ${question.answer}`
              }
            />
            {question.answer
              .split(",")
              .every((x) =>
                selectedOptions.some((y) => y.trim() === x.trim())
              ) && <CheckCircleIcon style={{ color: "green" }} />}
          </>
        ) : (
          <ListItemText secondary="*********" />
        )}
      </ListItem>
    </div>
  );
};
export default Question;
