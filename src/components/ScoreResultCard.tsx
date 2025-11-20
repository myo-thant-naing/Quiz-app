import { FaCheck, FaTimes } from "react-icons/fa";
import type { Question } from "../types/index.types";
import { Link } from "react-router";
import QuizFinishedAnimation from "./QuizFinishedAnimation";

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
			{/* complete quiz animation */}
			<QuizFinishedAnimation />
			<h1 className="text-3xl font-bold mb-4">Quiz Finished!</h1>
			<p className="text-xl mb-4">
				Your Score: {score} / {questions.length}
			</p>

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
										const isUserChoice =
											userAnswer === option;

										const bgColor = isUserChoice
											? option === q.answer
												? "bg-green-100 border border-green-500"
												: "bg-red-100 border border-red-500"
											: "bg-transparent";

										return (
											<div
												key={option}
												className={`flex items-center gap-2 p-1 rounded ${bgColor}`}
											>
												<span className="font-mono">{`(${String.fromCharCode(
													97 + idx
												)})`}</span>

												{option}

												{isUserChoice &&
													option === q.answer && (
														<FaCheck className="text-green-500 ml-1" />
													)}

												{isUserChoice &&
													option !== q.answer && (
														<FaTimes className="text-red-500 ml-1" />
													)}
											</div>
										);
									})}
								</div>
								<p className="mt-1 font-semibold">
									Ans: {q.answer}
								</p>
							</div>
						);
					})}
				</div>
			)}

			<div className="flex justify-evenly items-center mt-5 space-x-3">
				{!showAnswers && (
					<button
						onClick={() => setShowAnswers(true)}
						className="p-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition cursor-pointer"
					>
						Check
					</button>
				)}
				<button
					onClick={handleReplay}
					className="p-3 w-full bg-green-500 hover:bg-green-600 text-white rounded-xl transition cursor-pointer"
				>
					Replay
				</button>
				<Link
					to="/"
					className="p-3 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition "
				>
					Home
				</Link>
			</div>
		</div>
	);
};

export default ScoreResultCard;
