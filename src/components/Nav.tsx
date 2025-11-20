import { Link } from "react-router";
import { IT_Logo, Uni_Logo } from "../data";

const Nav = () => {
	return (
		<div className="w-full py-6  backdrop-blur-md shadow-sm fixed top-0  z-10">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4">
				<Link to="/">
					<img src={Uni_Logo} className="h-10" alt="Left Logo" />
				</Link>

				<img
					src={IT_Logo}
					className="h-10 rounded-full"
					alt="Right Logo"
				/>
			</div>
		</div>
	);
};

export default Nav;
