import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import RadioButtonsGroup from "../../RadioButtonsGroup";
import {
	array22,
	array23,
	array24,
	array25,
	array26,
	array27,
	array28,
	array29,
	array30,
	array31,
} from "./radioButtonsData";
const RespiratorySymptoms = () => {
	return (
		<View>
			<Text style={tw`text-xl text-center font-bold`}>
				Respiratory Symptoms
			</Text>
			<RadioButtonsGroup title="Sore Throat" array={array22} />
			<RadioButtonsGroup title="Shortness Of Breath" array={array23} />
			<RadioButtonsGroup title="Pneumonia" array={array30} />
			<RadioButtonsGroup title="Dry Cough" array={array24} />
			<RadioButtonsGroup
				title="Cough Followed By Vomiting For No Apparent Reason"
				array={array25}
			/>
			<RadioButtonsGroup title="Runny Nose" array={array26} />
			<RadioButtonsGroup title="Rapid Breathing" array={array27} />
			<RadioButtonsGroup title="Cough" array={array28} />
			<RadioButtonsGroup title="Frequent Coughing Bouts" array={array29} />
			<RadioButtonsGroup title="Chest Pain" array={array31} />
		</View>
	);
};
export default RespiratorySymptoms;
