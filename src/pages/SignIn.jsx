import Button from "../ui/Button";
import google from "../assets/icon/google.png";
import close from "../assets/icon/close.svg";
import bgHero from "../assets/img/bg-hero.jpg";
import theater from "../assets/img/theater.jpg";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

function SignIn() {
	const navigate = useNavigate("/");
	const { username, setUsername } = useMovies();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/");
	}

	return (
		<div
			style={{ backgroundImage: `url(${theater})` }}
			className="fixed inset-0 flex flex-col justify-center items-center mx-auto  md:p-5 p-2 rounded-2xl bg-cover bg-center "
		>
			<form
				onSubmit={handleSubmit}
				style={{ backgroundImage: `url(${bgHero})` }}
				className="flex flex-col space-y-3 md:w-[70%] w-full bg-amber-50 p-6 rounded-2xl relative"
			>
				<button onClick={() => navigate("/")}>
					<img
						src={close}
						alt="close"
						className="md:h-20 h-15 absolute right-5 top-5"
					/>
				</button>
				<h2 className="font-semibold md:text-5xl text-3xl text-white text-center p-3">
					Sign In!
				</h2>
				<div className="flex items-center gap-5 bg-white rounded-2xl my-3 md:w-[40%] w-full">
					<img src={google} alt="icon google" className="h-15" />
					<span className="text-lg"> Sign in with Google</span>
				</div>

				<span className="my-4 text-2xl text-white ">Or:</span>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Your name..."
					className="px-6 py-4 text-xl rounded-lg bg-gray-500 text-white "
					required
				/>

				<input
					type="password"
					placeholder="Password"
					className="px-6 py-4 text-xl rounded-lg bg-gray-500 text-white "
					required
				/>
				<div className="my-4 flex items-center justify-around">
               <span className="text-white text-lg"><input type="checkbox" /> Save password</span>
					<Button type="submit">Sign In</Button> <br />
				</div>
					<span className="text-white text-lg">
						Don't have a account ? Sign Up now !
					</span>
			</form>
		</div>
	);
}

export default SignIn;
