import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import RadioButtonsGroup from "../../RadioButtonsGroup";
import {
	arraySix,
	arraySeven,
	arrayEight,
	arrayNine,
	arrayTen,
	array11,
	array12,
	array13,
	array14,
} from "./radioButtonsData";
const DigestiveSymptoms = () => {
	return (
		<View>
			<Text style={tw`text-xl text-center font-bold`}>Digestive Symptoms </Text>
			<RadioButtonsGroup title="Nausea" array={arraySix} />
			<RadioButtonsGroup title="Diarrhea" array={arraySeven} />
			<RadioButtonsGroup
				title="Colic/Abdominal Cistress/Stomach pain"
				array={arrayEight}
			/>
			<RadioButtonsGroup title="Constipation" array={arrayNine} />
			<RadioButtonsGroup title="Difficulty Swallowing" array={arrayTen} />
			<RadioButtonsGroup title="Vomiting" array={array11} />
			<RadioButtonsGroup title="Watery Diarrhea" array={array12} />
			<RadioButtonsGroup title="Mucus In Stool" array={array13} />
			<RadioButtonsGroup title="Anorexia" array={array14} />
		</View>
	);
};
export default DigestiveSymptoms;
