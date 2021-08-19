import { useState } from "react";
import { Label, InputRadio } from "./Styled";

const Question = ({
  questionNumber,
  question,
  onSelectOption,
  showAnswers,
}) => {
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <div>
      <h3>
        Question: #{questionNumber} - {question.description}
      </h3>
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
      {showAnswers && <Label>Answer: {question.answer}</Label>}
      {showAnswers && question.userAnswer
        ? question.userAnswer === question.answer
          ? "Correto"
          : `Resposta correta é: ${question.answer}`
        : null}
    </div>
  );
};
export default Question;
