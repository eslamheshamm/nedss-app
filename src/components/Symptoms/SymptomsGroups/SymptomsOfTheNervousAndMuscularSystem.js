import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import RadioButtonsGroup from "../../RadioButtonsGroup";
import {
	array15,
	array16,
	array17,
	array18,
	array19,
	array20,
	array21,
} from "./radioButtonsData";
const SymptomsOfTheNervousAndMuscularSystem = () => {
	return (
		<View>
			<Text style={tw`text-xl text-center font-bold`}>
				Symptoms Of The Nervous
			</Text>
			<Text style={tw`text-xl text-center font-bold`}>and Muscular System</Text>
			<RadioButtonsGroup title="Nausea" array={array15} />
			<RadioButtonsGroup title="Diarrhea" array={array16} />
			<RadioButtonsGroup title="Constipation" array={array17} />
			<RadioButtonsGroup title="Difficulty Swallowing" array={array18} />
			<RadioButtonsGroup title="Vomiting" array={array19} />
			<RadioButtonsGroup title="Watery Diarrhea" array={array20} />
			<RadioButtonsGroup title="Mucus In Stool" array={array21} />
		</View>
	);
};
export default SymptomsOfTheNervousAndMuscularSystem;
