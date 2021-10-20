import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import ChartsView from "../../components/ChartsView";

const HomeScreen = () => {
	return (
		<View style={tw`  h-full bg-gray-200`}>
			<View style={tw`mt-20 ml-12`}>
				<Text>Here Will Show The Indicators</Text>
			</View>
			<View style={tw`ml-12 mt-4 w-[200px]  h-[200px]`}>
				<ChartsView />
			</View>
		</View>
	);
};
export default HomeScreen;
