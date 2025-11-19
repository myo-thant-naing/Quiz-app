import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function App() {
  const allQuestions: Question[] = [
    {
      question: "Capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language runs in a browser?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript",
    },
    {
      question: "Who created React?",
      options: ["Facebook", "Google", "Microsoft", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "Largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Fastest land animal?",
      options: ["Cheetah", "Lion", "Tiger", "Elephant"],
      answer: "Cheetah",
    },
    {
      question: "Square root of 64?",
      options: ["6", "8", "10", "12"],
      answer: "8",
    },
    {
      question: "Color of the sky?",
      options: ["Blue", "Red", "Green", "Yellow"],
      answer: "Blue",
    },
    {
      question: "Primary gas in air?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "Programming language by Microsoft?",
      options: ["C#", "Python", "Java", "Ruby"],
      answer: "C#",
    },
    {
      question: "HTML stands for?",
      options: [
        "HyperText Markup Language",
        "HighText Markup Language",
        "HyperText Machine Language",
        "HyperTransfer Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Python creator?",
      options: [
        "Guido van Rossum",
        "Dennis Ritchie",
        "James Gosling",
        "Bjarne Stroustrup",
      ],
      answer: "Guido van Rossum",
    },
    {
      question: "Largest ocean?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
    {
      question: "Fastest bird?",
      options: ["Falcon", "Eagle", "Sparrow", "Pigeon"],
      answer: "Falcon",
    },
    {
      question: "Smallest continent?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia",
    },
    {
      question: "Chemical symbol of Water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
  ];

  const getRandomQuestions = () => {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const [questions, setQuestions] = useState<Question[]>(getRandomQuestions());
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (showResult) return;
    if (time === 0) {
      handleNextQuestion();
      return;
    }
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time, showResult]);

  const handleNextQuestion = () => {
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
      setTime(30);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswer = (option: string) => {
    if (option === questions[index].answer) setScore(score + 1);
    handleNextQuestion();
  };

  const handleReplay = () => {
    setQuestions(getRandomQuestions());
    setIndex(0);
    setScore(0);
    setShowResult(false);
    setShowAnswers(false);
    setTime(30);
  };

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (time / 30) * circumference;
  const strokeColor = time > 10 ? "#34d399" : "#f87171"; // green for first 20s, red for last 10s

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        {showResult ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Quiz Finished!</h1>
            <p className="text-xl mb-4">
              Your Score: {score} / {questions.length}
            </p>
            {!showAnswers && (
              <button
                onClick={() => setShowAnswers(true)}
                className="p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition mb-4">
                Show Answers
              </button>
            )}
            {showAnswers && (
              <div className="text-left">
                {questions.map((q, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-semibold">
                      Q{i + 1}: {q.question}
                    </p>
                    <p className="flex items-center gap-2">
                      Answer: <FaCheck className="text-green-500" /> {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={handleReplay}
              className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition mt-4">
              Replay
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold">
                {questions[index].question}
              </h1>
              <svg className="w-16 h-16" viewBox="0 0 70 70">
                <circle
                  cx="35"
                  cy="35"
                  r={radius}
                  stroke="#e5e7eb"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="35"
                  cy="35"
                  r={radius}
                  stroke={strokeColor}
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  transform="rotate(-90 35 35)"
                  strokeLinecap="round"
                />
                <text
                  x="35"
                  y="40"
                  textAnchor="middle"
                  fontSize="14"
                  fill="#374151">
                  {time}s
                </text>
              </svg>
            </div>
            <div className="grid gap-3">
              {questions[index].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition flex items-center gap-2">
                  <FaCheck /> {option}
                </button>
              ))}
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Question {index + 1} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
