import { questions } from "../assets/questions";

export const getQuestions = ({
  questionsQty,
  random = false,
  start = 1,
  end,
}) => {
  const questionKeys = Object.keys(questions);
  const b2cQuestions = random
    ? questionKeys
        .map((x) => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
    : questionKeys;

  return questionsQty || end > 1
    ? b2cQuestions.slice(--start, end || questionsQty)
    : b2cQuestions;
};
