import { questions } from "../assets/questions";

export const getQuestions = ({
  questionsQty,
  random = false,
  start = 1,
  end,
}) => {
  const b2cQuestions = random
    ? Object.keys(questions)
        .map((x) => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
    : Object.keys(questions);

  return questionsQty || end > 1
    ? b2cQuestions.slice(--start, end || questionsQty)
    : b2cQuestions;
};
