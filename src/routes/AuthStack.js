import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Sign In"
				component={SignInScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
