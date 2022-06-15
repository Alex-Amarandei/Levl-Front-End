import Button from "@mui/material/Button";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
	<li
		className={`mr-4 px-6 py-3 rounded-full bg-stone-100 bg-opacity-40 font-bold ${classprops}`}
	>
		{title}
	</li>
);

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const networkName = (await provider.getNetwork()).name;

const Navbar = () => {
	const { account, activateBrowserWallet, deactivate } = useEthers();
	const connected = account !== undefined;

	return (
		<nav className="w-full flex justify-between p-4">
			<div className="md:flex-[0.5] flex-initial justify-center items-center">
				<img src={logo} alt="logo" className="w-64 cursor-pointer" />
			</div>
			<ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial capitalize">
				{connected ? (
					<>
						{[account, networkName].map((item, index) => (
							<NavBarItem key={item + index} title={item} />
						))}

						<Button
							variant="contained"
							className="rounded-full px-9 py-3 capitalize font-semibold hover:bg-gradient-to-r hover:from-sky-400/80 hover:to-blue-500/80 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
							onClick={() => {
								connected ? deactivate() : activateBrowserWallet();
							}}
						>
							Disconnect
						</Button>
					</>
				) : (
					<>
						{[networkName].map((item, index) => (
							<NavBarItem key={item + index} title={item} />
						))}
						<Button
							variant="contained"
							className="rounded-full px-6 py-3 capitalize font-semibold bg-gradient-to-r from-sky-400 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500/80 hover:via-red-500/80 hover:to-yellow-500/80"
							onClick={() => {
								connected ? deactivate() : activateBrowserWallet();
							}}
						>
							Connect Wallet
						</Button>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
