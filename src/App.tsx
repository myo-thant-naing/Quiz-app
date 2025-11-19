import { useState, useEffect } from "react";
import { allQuestions } from "./data";
import type { Question } from "./types/index.types";
import ScoreResultCard from "./components/ScoreResultCard";
import QuestionForm from "./components/QuestionForm";

export default function App() {
	const handleNextQuestion = () => {
		const next = index + 1;
		if (next < questions.length) {
			setIndex(next);
			setTime(30);
		} else {
			setShowResult(true);
		}
	};

	const getRandomQuestions = () => {
		const shuffled = allQuestions.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 10);
	};

	const [questions, setQuestions] = useState<Question[]>(
		getRandomQuestions()
	);
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

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
			<div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
				{showResult ? (
					<ScoreResultCard
						questions={questions}
						score={score}
						showAnswers={showAnswers}
						setShowAnswers={setShowAnswers}
						handleReplay={handleReplay}
					/>
				) : (
					<QuestionForm
						questions={questions}
						index={index}
						time={time}
						handleAnswer={handleAnswer}
					/>
				)}
			</div>
		</div>
	);
}
