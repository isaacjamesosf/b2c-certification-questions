import { Box, ListItem, ListItemText } from "@material-ui/core";
import { useState } from "react";
import { Label, InputRadio } from "./Styled";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Question = ({
  questionNumber,
  question,
  onSelectOption,
  showAnswers,
}) => {
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <div id={Number(questionNumber)}>
      <Box bgcolor="#3f51b5" color="#fff" left={true} mt={4} border={1}>
        <ListItem align="left">
          <ListItemText
            primary={`${questionNumber}) - ${question.description}`}
          />
        </ListItem>
      </Box>
      {Object.keys(question.options).map((option, idx) => (
        <div key={option}>
          <Label>
            {option})
            <InputRadio
              type="radio"
              checked={selectedOption === option}
              onClick={() => {
                onSelectOption(questionNumber, option);
                setSelectedOption(option);
              }}
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
                question.userAnswer === question.answer
                  ? "Correct"
                  : `The answer is: ${question.answer}`
              }
            />
            {question.userAnswer === question.answer && <CheckCircleIcon color="#fff" style={{color: "green"}} />}
          </>
        ) : (
          <ListItemText secondary="*********" />
        )}
      </ListItem>
    </div>
  );
};
export default Question;
