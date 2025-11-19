import { FaCheck, FaTimes } from "react-icons/fa";
import type { Question } from "../types/index.types";
import { Link } from "react-router";

const ScoreResultCard = ({
  questions,
  score,
  showAnswers,
  setShowAnswers,
  handleReplay,
  userAnswers,
}: {
  questions: Question[];
  score: number;
  showAnswers: boolean;
  setShowAnswers: (val: boolean) => void;
  handleReplay: () => void;
  userAnswers: (string | null)[];
}) => {
  return (
    <div className="mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Quiz Finished!</h1>
      <p className="text-xl mb-4">
        Your Score: {score} / {questions.length}
      </p>

      {!showAnswers && (
        <button
          onClick={() => setShowAnswers(true)}
          className="p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition mb-4">
          Check
        </button>
      )}

      {showAnswers && (
        <div className="text-left space-y-4">
          {questions.map((q, i) => {
            const userAnswer = userAnswers[i];

            return (
              <div key={i} className="pb-4 border-b">
                <p className="font-semibold mb-2">
                  Q{i + 1}. {q.question}
                </p>

                <div className="grid gap-1 ml-4">
                  {q.options.map((option, idx) => {
                    const isUserChoice = userAnswer === option;

                    const bgColor = isUserChoice
                      ? option === q.answer
                        ? "bg-green-100 border border-green-500"
                        : "bg-red-100 border border-red-500"
                      : "bg-transparent";

                    return (
                      <div
                        key={option}
                        className={`flex items-center gap-2 p-1 rounded ${bgColor}`}>
                        <span className="font-mono">{`(${String.fromCharCode(
                          97 + idx
                        )})`}</span>

                        {option}

                        {isUserChoice && option === q.answer && (
                          <FaCheck className="text-green-500 ml-1" />
                        )}

                        {isUserChoice && option !== q.answer && (
                          <FaTimes className="text-red-500 ml-1" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-1 font-semibold">Ans: {q.answer}</p>
              </div>
            );
          })}
        </div>
      )}

      <button
        onClick={handleReplay}
        className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition mt-4">
        Replay
      </button>

      <Link
        to="/"
        className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition ml-3">
        Home
      </Link>
    </div>
  );
};

export default ScoreResultCard;
