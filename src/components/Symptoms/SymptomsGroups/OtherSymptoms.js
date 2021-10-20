import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import RadioButtonsGroup from "../../RadioButtonsGroup";
import {
	array33,
	array34,
	array35,
	array36,
	array37,
	array38,
	array39,
	array40,
	array41,
	array42,
	array43,
} from "./radioButtonsData";
const OtherySymptoms = () => {
	return (
		<View>
			<Text style={tw`text-xl text-center font-bold`}>Other Symptoms</Text>
			<RadioButtonsGroup title="Conjunctival Congestion" array={array33} />
			<RadioButtonsGroup title="Rash" array={array34} />
			<RadioButtonsGroup title="Shock" array={array35} />
			<RadioButtonsGroup title="Pressure Drop" array={array36} />
			<RadioButtonsGroup title="Enlarged Lymph Nodes" array={array37} />
			<RadioButtonsGroup title="Blurred Vision" array={array38} />
			<RadioButtonsGroup title="Unconsciousness" array={array39} />
			<RadioButtonsGroup title="Itch(Scratcher)" array={array40} />
		</View>
	);
};
export default OtherySymptoms;
