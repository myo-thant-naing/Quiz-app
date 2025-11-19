import { FaCheck } from "react-icons/fa";
import type { Question } from "../types/index.types";

const ScoreResultCard = ({
	questions,
	score,
	showAnswers,
	setShowAnswers,
	handleReplay,
}: {
	questions: Question[];
	score: number;
	showAnswers: boolean;
	setShowAnswers: (val: boolean) => void;
	handleReplay: () => void;
}) => {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold mb-4">Quiz Finished!</h1>
			<p className="text-xl mb-4">
				Your Score: {score} / {questions.length}
			</p>
			{!showAnswers && (
				<button
					onClick={() => setShowAnswers(true)}
					className="p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition mb-4"
				>
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
								Answer: <FaCheck className="text-green-500" />{" "}
								{q.answer}
							</p>
						</div>
					))}
				</div>
			)}
			<button
				onClick={handleReplay}
				className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition mt-4"
			>
				Replay
			</button>
		</div>
	);
};

export default ScoreResultCard;
