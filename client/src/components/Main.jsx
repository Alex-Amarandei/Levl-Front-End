import Button from "@mui/material/Button";
import { useState } from "react";
const Input = ({
	placeholder,
	name,
	type,
	value,
	validateInput,
	inputError,
}) => (
	<input
		placeholder={placeholder}
		type={type}
		value={value}
		onChange={(e) => validateInput(e, name)}
		className={`m-4 w-full rounded-sm p-4 outline-dashed outline-2 outline-gray-500 border-none text-md caret-gray-500 placeholder:text-gray-500 placeholder:italic focus:outline-gray-800 focus:outline focus:text-gray-800 ${
			inputError
				? "bg-red-600/20 text-red-700"
				: "bg-slate-400/10 text-gray-500"
		}`}
	/>
);

const Main = () => {
	const [input0, setInput0] = useState("");
	const [input1, setInput1] = useState("");

	const [input0Error, setInput0Error] = useState(false);
	const [input1Error, setInput1Error] = useState(false);

	const validateInput = (e, name) => {
		console.log(e.target.value);
		name == "token_0_address"
			? setInput0(e.target.value)
			: setInput1(e.target.value);

		if (
			e.target.value.length != 0 &&
			(e.target.value.length != 42 || !e.target.value.startsWith("0x"))
		) {
			name == "token_0_address" ? setInput0Error(true) : setInput1Error(true);
		} else {
			name == "token_0_address" ? setInput0Error(false) : setInput1Error(false);
		}
	};

	const validateAddresses = () => {
		if (input0 == input1) {
			console.log("Addresses cannot match.");
		}
	};

	return (
		<div className="flex w-full justify-center items-center">
			<div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 w-full">
				<div className="flex flex-col flex-1 items-center justify-start w-full mt-10">
					<div className="p-5 w-2/5 flex flex-col justify-start items-center rounded-lg bg-gradient-to-r from-rose-100/90 to-teal-100/90 drop-shadow-2xl hover:bg-gradient-to-r hover:from-rose-100 hover:to-teal-100">
						<Input
							placeholder="First Token Address"
							name="token_0_address"
							type="text"
							validateInput={validateInput}
							inputError={input0Error}
						/>
						<Input
							placeholder="Second Token Address"
							name="token_1_address"
							type="text"
							validateInput={validateInput}
							inputError={input1Error}
						/>

						<p>Current fee: 0.1 ETH</p>

						<div className="h-[1px] w-full bg-gray-400 my-2" />

						<Button
							variant="contained"
							onClick={validateAddresses}
							disabled={
								input0Error ||
								input1Error ||
								input0.length == 0 ||
								input1.length == 0
							}
							className="mt-3 w-full p-4 rounded-full font-bold  bg-gradient-to-r from-sky-400 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500/80 hover:via-red-500/80 hover:to-yellow-500/80"
						>
							Place Order
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
