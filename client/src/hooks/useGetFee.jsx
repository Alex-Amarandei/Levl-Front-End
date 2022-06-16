import { ethers } from "ethers";
import fundsManagerJson from "../contract_builds/contracts/FundsManager.json";
import mapJson from "../contract_builds/deployments/map.json";

const provider = new ethers.providers.JsonRpcProvider(
	"https://rinkeby.infura.io/v3/5c3ac3bf86374afd820299e0eaef8a6d"
);

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
