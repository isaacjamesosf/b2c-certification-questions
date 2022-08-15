import { questions } from "../assets/questions";

var OPTIONS = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
}

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


// function filterQuestions (questions) {
//   questions.map((question, index) => {
//       var questionFinal = {};
//       questionFinal.questionNumber = `Question #:${index+1}`;
//       questionFinal.description    = question.structure.query.text;
//       questionFinal.answer         = "";
//       questionFinal.options        = {};

//       question.structure.options.map((option, index) => {
//           questionFinal.options[OPTIONS[index]] = option.text;
//       });

//       if (question.structure.answer.length) {
//           question.structure.answer.map(answer =>{
//               questionFinal.answer += `${OPTIONS[answer]}, `;
//           });
//       } else {
//           questionFinal.answer += OPTIONS[question.structure.answer];
//       }

//       finalQuestions.push(questionFinal);
//   });
// }