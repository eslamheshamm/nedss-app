import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import RadioButtonsGroup from "../../RadioButtonsGroup";
import {
	array44,
	array45,
	array46,
	array47,
	array48,
	array49,
	array50,
	array51,
	array52,
	array53,
} from "./radioButtonsData";
const SpecialSymptoms = () => {
	return (
		<View>
			<Text style={tw`text-xl text-center font-bold`}>Special Symptoms </Text>
			<RadioButtonsGroup title="Pain In The Eye Socket" array={array44} />
			<RadioButtonsGroup title="Increase The Amount Of Urine" array={array45} />
			<RadioButtonsGroup title="Bleeding" array={array46} />
			<RadioButtonsGroup title="Haematemesis" array={array47} />
			<RadioButtonsGroup title="Bloody Stools" array={array48} />
			<RadioButtonsGroup title="Conjunctivitis" array={array49} />
			<RadioButtonsGroup
				title="Decrease In The Amount Of Urine"
				array={array50}
			/>
			<RadioButtonsGroup
				title="Hemorrhagic Rash/Subcutaneous Hemorrhage"
				array={array51}
			/>
			<RadioButtonsGroup title="Epistaxis(Nosebleeds)" array={array52} />
			<RadioButtonsGroup title="Cough Accompanied By Blood" array={array53} />
		</View>
	);
};
export default SpecialSymptoms;
