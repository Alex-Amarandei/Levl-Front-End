import { ethers } from "ethers";
import brownieJson from "../brownieConfig.json";
import factoryJson from "../contract_builds/interfaces/IUniswapV2Factory.json";

const provider = new ethers.providers.JsonRpcProvider(
	"https://rinkeby.infura.io/v3/5c3ac3bf86374afd820299e0eaef8a6d"
);

const factoryAbi = factoryJson["abi"];

const useValidatePair = (dex) => {
	const factoryAddress = brownieJson["networks"]["rinkeby"]["factory"][dex];
	const factoryContract = new ethers.Contract(
		factoryAddress,
		factoryAbi,
		provider
	);

	const pairAddress = async (token0Address, token1Address) => {
		return await factoryContract.getPair(token0Address, token1Address);
	};

	return pairAddress;
};

export default useValidatePair;
