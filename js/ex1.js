// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];


const displayQuestions = () => {
  const contentDiv = document.getElementById('content');

  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.textContent = `Question ${index + 1}: ${question.statement}`;

    const showAnswer = document.createElement('button');
    showAnswer.textContent = 'Show answer';
    showAnswer.addEventListener('click', () => {
      const answerElement = document.createElement('div');
      answerElement.textContent = question.answer;

      contentDiv.insertBefore(answerElement, showAnswer.nextSibling);

      contentDiv.removeChild(showAnswer);
    });

    contentDiv.appendChild(questionElement);
    contentDiv.appendChild(showAnswer);
  });
};

displayQuestions();




