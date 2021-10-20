import React, { useState } from "react";
import { View, Text } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import tw from "twrnc";

const RadioButtonsGroup = (props) => {
	const { array, title } = props;
	const [radioButtons, setRadioButtons] = useState(array);
	function onPressRadioButton(radioButtonsArray) {
		setRadioButtons(radioButtonsArray);
	}
	return (
		<View style={tw`flex  my-2 mx-4`}>
			<View>
				<Text style={tw`font-bold text-base mb-2 text-black`}>{title}</Text>
			</View>
			<View>
				<RadioGroup
					layout="row"
					radioButtons={radioButtons}
					onPress={onPressRadioButton}
				/>
			</View>
		</View>
	);
};
export default RadioButtonsGroup;
