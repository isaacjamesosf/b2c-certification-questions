import { questions } from "../assets/questions";

export const getQuestions = ({ questionsQty, random = false }) => {
  return random
    ? Object.keys(questions)
        .map((x) => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
        .slice(0, questionsQty)
    : Object.keys(questions).slice(0, questionsQty);
};
