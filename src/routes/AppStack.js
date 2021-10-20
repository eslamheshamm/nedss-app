import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import GeneralForm from "../screens/GeneralForm";
import SyncData from "../screens/SyncData";
import SignOutComponent from "../components/SignOut";

const Drawer = createDrawerNavigator();

export const AppStack = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={{
				drawerType: "back",
				headerTransparent: true,
				headerTitleStyle: {
					color: "transparent",
				},
			}}
		>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="General Form" component={GeneralForm} />
			<Drawer.Screen name="Sync" component={SyncData} />
			<Drawer.Screen name="Sign Out" component={SignOutComponent} />
		</Drawer.Navigator>
	);
};
