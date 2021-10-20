import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
const SumbitForm = ({ navigation }) => {
	return (
		<View style={tw`flex-1 items-center justify-center h-full`}>
			<View>
				<Text style={tw`font-bold text-xl`}>Thanks.</Text>
			</View>
			<TouchableOpacity
				style={tw` rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
				onPress={() => navigation.navigate("FirstStep")}
			>
				<Text style={tw`text-white`}>Sumbit Another Form!</Text>
			</TouchableOpacity>
		</View>
	);
};
export default SumbitForm;
