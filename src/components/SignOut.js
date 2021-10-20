import React, { useEffect } from "react";
import { View } from "react-native";
import { useAuth } from "../contexts/Auth";
import { Loading } from "./Loading";
import tw from "twrnc";
const SignOutComponent = () => {
	const auth = useAuth();
	const signOut = () => {
		auth.signOut();
	};
	useEffect(() => {
		signOut();
	}, []);
	return (
		<View style={tw`flex-1 items-center justify-center h-full`}>
			<Loading />
		</View>
	);
};
export default SignOutComponent;
