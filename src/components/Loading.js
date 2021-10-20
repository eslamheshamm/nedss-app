import React from "react";
import { View, ActivityIndicator } from "react-native";
import tw from "twrnc";
export const Loading = () => {
	return (
		<View style={tw`flex-1 items-center justify-center h-full`}>
			<View>
				<ActivityIndicator color={"#000"} animating={true} size="small" />
			</View>
		</View>
	);
};
