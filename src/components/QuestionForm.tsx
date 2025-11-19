import { FaCheck } from "react-icons/fa";
import Timer from "./Timer";

const QuestionForm = ({
	questions,
	index,
	time,
	handleAnswer,
}: {
	questions: {
		question: string;
		options: string[];
		answer: string;
	}[];
	index: number;
	time: number;
	handleAnswer: (option: string) => void;
}) => {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-semibold">
					{questions[index].question}
				</h1>

				<Timer time={time} />
			</div>
			<div className="grid gap-3">
				{questions[index].options.map((option) => (
					<button
						key={option}
						onClick={() => handleAnswer(option)}
						className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition flex items-center gap-2"
					>
						<FaCheck /> {option}
					</button>
				))}
			</div>
			<p className="mt-4 text-gray-600 text-sm">
				Question {index + 1} / {questions.length}
			</p>
		</div>
	);
};

export default QuestionForm;
