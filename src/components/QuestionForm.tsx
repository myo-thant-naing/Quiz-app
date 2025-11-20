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
	const colors = [
		"bg-red-200",
		"bg-green-200",
		"bg-blue-200",
		"bg-yellow-200",
	];
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-semibold">
					{questions[index].question}
				</h1>

				<Timer time={time} />
			</div>
			<div className="grid gap-3">
				{questions[index].options.map((option, idx) => (
					<button
						key={option}
						onClick={() => handleAnswer(option)}
						className={`p-3 px-5 ${
							colors[idx % colors.length]
						}  rounded-xl transition flex items-center gap-2 cursor-pointer`}
					>
						{`(${String.fromCharCode(97 + idx)})`} {option}
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
