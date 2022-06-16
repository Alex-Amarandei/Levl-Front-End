import { ethers } from "ethers";
import fundsManagerJson from "../contract_builds/contracts/FundsManager.json";
import mapJson from "../contract_builds/deployments/map.json";

let provider;
window.ethereum
	.enable()
	.then((provider = new ethers.providers.Web3Provider(window.ethereum)));
const signer = provider.getSigner();

const fundsManagerAbi = fundsManagerJson["abi"];

const fundsManagerAddress = mapJson["4"]["FundsManager"][0];

const useFundWithGas = async (fee) => {
	const fundsManagerContract = new ethers.Contract(
		fundsManagerAddress,
		fundsManagerAbi,
		signer
	);

	const tx = {
		to: fundsManagerAddress,
		value: fee,
		gasLimit: ethers.utils.hexlify(100000),
		gasPrice: provider.getGasPrice(),
	};

	let res;
	await signer.sendTransaction(tx).then((transaction) => {
		res = transaction;
	});
	return res;
};

export default useFundWithGas;
