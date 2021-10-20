import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
const TitleComponent = (props) => {
	const { title } = props;
	return (
		<View>
			<View style={tw`mx-4`}>
				<Text
					style={tw`text-[40px] font-bold `}
					style={{
						fontSize: 24,
						fontWeight: "bold",
					}}
				>
					{title}
				</Text>
			</View>
			<View style={tw`w-full mt-3 mb-4 h-[1px] bg-gray-200`}></View>
		</View>
	);
};
export default TitleComponent;
