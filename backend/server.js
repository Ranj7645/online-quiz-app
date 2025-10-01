// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let quizzes = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  }
];

// Get all quizzes (without answers)
app.get("/api/quizzes", (req, res) => {
  res.json(quizzes.map(({ answer, ...rest }) => rest));
});

// Get single quiz
app.get("/api/quizzes/:id", (req, res) => {
  const quiz = quizzes.find(q => q.id === parseInt(req.params.id));
  if (quiz) {
    const { answer, ...rest } = quiz;
    res.json(rest);
  } else {
    res.status(404).json({ message: "Quiz not found" });
  }
});

// Submit answer
app.post("/api/quizzes/:id/submit", (req, res) => {
  const { answer } = req.body;
  const quiz = quizzes.find(q => q.id === parseInt(req.params.id));
  if (quiz) {
    const isCorrect = quiz.answer === answer;
    res.json({ correct: isCorrect, correctAnswer: quiz.answer });
  } else {
    res.status(404).json({ message: "Quiz not found" });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Online Quiz API ",
    endpoints: {
      allQuizzes: "/api/quizzes",
      singleQuiz: "/api/quizzes/:id",
      submitAnswer: "/api/quizzes/:id/submit"
    }
  });
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
