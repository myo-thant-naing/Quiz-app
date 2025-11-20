import lottie from "lottie-web";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: allow importing JSON without type declaration
// import QuizComplete from "../../public/animation/complete.json";
import { useEffect, useRef } from "react";

export default function LottieAnim() {
	const container = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: container.current!,
			renderer: "svg",
			loop: false,
			autoplay: true,
			path: "/animation/complete.json",
		});

		const timer = setTimeout(() => {
			anim.stop(); //stop animation
		}, 2000);

		return () => {
			clearTimeout(timer);
			anim.destroy();
		};
	}, []);

	return (
		<div
			ref={container}
			// style={{ width: 300, height: 300 }}
			className="absolute top-0 left-0 w-full h-full pointer-events-none"
			style={{ zIndex: 10 }}
		/>
	);
}
