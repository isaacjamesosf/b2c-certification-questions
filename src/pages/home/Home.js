import { useState, useEffect } from "react";
import { questions } from "../../assets/questions";
import Question from "../../components/commom/Question";
import { InputRadio, Label } from "../../components/commom/Styled";

const Home = () => {
  const [b2cQuestios, setB2cQuestios] = useState(questions);
  const [showAnswers, setShowAnswers] = useState(false);

  const onSelectOption = (questionNumber, selectedOption) => {
    setB2cQuestios((oldState) => ({
      ...b2cQuestios,
      [questionNumber]: {
        ...oldState[questionNumber],
        userAnswer: selectedOption,
      },
    }));
  };

  useEffect(() => {
    console.log(b2cQuestios);
  }, [b2cQuestios]);

  if (!b2cQuestios) {
    return null;
  }

  return (
    <div>
      <div>
        <p>Show Answer?</p>
        <InputRadio
          type="radio"
          checked={showAnswers}
          onClick={() => {
            setShowAnswers((old) => !old);
          }}
        />
      </div>
      {Object.keys(b2cQuestios).map((questionNumber) => (
        <div>
          <Question
            key={questionNumber}
            questionNumber={questionNumber}
            question={b2cQuestios[questionNumber]}
            onSelectOption={onSelectOption}
            showAnswers={showAnswers}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
