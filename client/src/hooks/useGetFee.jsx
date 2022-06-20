import { ethers } from "ethers";
import fundsManagerJson from "../contract_builds/contracts/FundsManager.json";
import mapJson from "../contract_builds/deployments/map.json";

const provider = new ethers.providers.Web3Provider(ethereum);

const fundsManagerAbi = fundsManagerJson["abi"];

const fundsManagerAddress = mapJson["4"]["FundsManager"][0];

const useGetFee = async () => {
	const fundsManagerContract = new ethers.Contract(
		fundsManagerAddress,
		fundsManagerAbi,
		provider
	);

	const getFee = await fundsManagerContract.fee();
	return getFee;
};

export default useGetFee;
