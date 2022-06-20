import axios from "axios";

const useGetOrders = async (address) => {
	let orders = [];

	await axios({
		method: "get",
		url: "/server/get/orders",
		params: {
			user_address: address,
		},
	})
		.then((res) => {
			orders = res.data["orders"];
		})
		.catch((error) => console.error(error));

	return orders;
};

export default useGetOrders;
