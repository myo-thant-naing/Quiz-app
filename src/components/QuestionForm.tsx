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
	// const colors = [
	// 	"bg-red-200",
	// 	"bg-green-200",
	// 	"bg-blue-200",
	// 	"bg-yellow-200",
	// ];
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
						className={`group p-3 px-5 rounded-xl transition flex justify-between items-center gap-2 cursor-pointer border-2 border-gray-300 hover:border-2 hover:border-[#A88BFF]`}
					>
						<span>
							{`(${String.fromCharCode(97 + idx)})`} {option}
						</span>
						<span className="group-active:opacity-100 group-active:translate-x-0 text-green-500 opacity-0 translate-x-1 transition-all duration-300 ease-in ">
							<FaCheck />
						</span>
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
