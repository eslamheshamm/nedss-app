import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GovernateAndReporting from "../../components/GovernateAndReporting";
import DemographicsOne from "../../components/Demographics/One";
import DemographicsTwo from "../../components/Demographics/Two";
import SymptomsOne from "../../components/Symptoms/One";
import SymptomsTwo from "../../components/Symptoms/Two";
import SymptomsThree from "../../components/Symptoms/Three";
import RespiratorySymptoms from "../../components/Symptoms/SymptomsGroups/RespiratorySymptoms";
import OtherySymptoms from "../../components/Symptoms/SymptomsGroups/OtherSymptoms";
import SymptomsFour from "../../components/Symptoms/Four";
import SymptomsFive from "../../components/Symptoms/Five";
import SymptomsSix from "../../components/Symptoms/Six";
import Residence from "../../components/Residance";
import SumbitForm from "../../components/SubmitForm";

const Stack = createNativeStackNavigator();

const GeneralForm = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTransparent: true,
				headerShown: false,
			}}
		>
			<Stack.Screen
				options={{ headerShown: false, headerTransparent: true }}
				name="FirstStep"
				component={GovernateAndReporting}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
					headerTransparent: true,
				}}
				name="SecondtStep"
				component={DemographicsOne}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="ThirdStep"
				component={DemographicsTwo}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="FourthStep"
				component={Residence}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="FifthStep"
				component={SymptomsOne}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="SixthStep"
				component={SymptomsTwo}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="SeventhStep"
				component={SymptomsThree}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="EighthStep"
				component={SymptomsFour}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="NineStep"
				component={SymptomsFive}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="TenStep"
				component={SymptomsSix}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Submit"
				component={SumbitForm}
			/>
		</Stack.Navigator>
	);
};
export default GeneralForm;
