import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import SpecialSymptoms from "./SymptomsGroups/SpecialSymptoms";

const SymptomsSix = ({ navigation }) => {
	return (
		<ScrollView style={tw`bg-white  h-full`}>
			<View style={tw`mt-[80px]`}>
				<SpecialSymptoms />
			</View>
			<View
				style={tw`mb-[32px] mt-[40px] items-center flex-1 flex-row justify-between  mx-4`}
			>
				<TouchableOpacity
					style={tw` rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.goBack()}
				>
					<Text style={tw`text-white`}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw` rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.navigate("Submit")}
				>
					<Text style={tw`text-white`}>Submit</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
export default SymptomsSix;
