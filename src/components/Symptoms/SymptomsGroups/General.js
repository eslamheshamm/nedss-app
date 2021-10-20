import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import RadioButtonsGroup from "../../RadioButtonsGroup";
import {
	arrayOne,
	arrayTwo,
	arrayThree,
	arrayFour,
	arrayFive,
} from "./radioButtonsData";
const GeneralSymptoms = () => {
	return (
		<View>
			<Text style={tw`text-xl text-center font-bold`}> General </Text>
			<RadioButtonsGroup title="Jerk" array={arrayOne} />
			<RadioButtonsGroup title="Drought" array={arrayTwo} />
			<RadioButtonsGroup title="Exhaustion/stress" array={arrayThree} />
			<RadioButtonsGroup title="Skin discolouration" array={arrayFour} />
			<RadioButtonsGroup title="Headache" array={arrayFive} />
		</View>
	);
};
export default GeneralSymptoms;
