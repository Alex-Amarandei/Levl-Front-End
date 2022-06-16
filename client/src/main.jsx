import { StyledEngineProvider } from "@mui/material";
import { DAppProvider, Rinkeby } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const config = {
	readOnlyChainId: Rinkeby.chainId,
	readOnlyUrls: {
		[Rinkeby.chainId]:
			"https://rinkeby.infura.io/v3/5c3ac3bf86374afd820299e0eaef8a6d",
	},
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<DAppProvider config={config}>
				<App />
			</DAppProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
