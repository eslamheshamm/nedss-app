import React from "react";
import { WebView } from "react-native-webview";
import tw from "twrnc";
const ChartsView = () => {
	return (
		<WebView
			source={{ uri: "https://tmentors.com/" }}
			originWhitelist={["*"]}
		/>
	);
};
export default ChartsView;
