import React, { useState } from "react";
import {
	ActivityIndicator,
	TouchableOpacity,
	Text,
	View,
	TextInput,
	Image,
} from "react-native";
import tw from "twrnc";
import { useAuth } from "../../contexts/Auth";

const SignInScreen = () => {
	const [loading, isLoading] = useState(false);
	const [password, setPassword] = useState("");
	const [username, setUserName] = useState("");
	const auth = useAuth();
	const signIn = async () => {
		isLoading(true);
		await auth.signIn();
	};

	return (
		<View style={tw`bg-white`}>
			{loading ? (
				<View style={tw`flex-1 items-center justify-center h-full`}>
					<ActivityIndicator color={"#000"} animating={true} size="small" />
				</View>
			) : (
				<View style={tw`flex bg-white h-full items-center justify-center  `}>
					<View style={tw`mb-12`}>
						<Image
							style={tw`w-[150px] h-[150px]`}
							source={require("../../../assets/DESlogo.png")}
						/>
					</View>
					<View
						style={tw`w-[80%] bg-[#B5B5C3] h-[50px] rounded-[25px] p-[20px] justify-center mb-[20px] `}
					>
						<TextInput
							style={tw`h-[50px] text-black`}
							placeholder="User Name"
							placeholderTextColor="black"
							onChangeText={(text) => setUserName(text)}
						/>
					</View>
					<View
						style={tw`w-[80%] bg-[#B5B5C3] h-[50px] rounded-[25px] p-[20px] justify-center mb-[20px] `}
					>
						<TextInput
							style={tw`h-[50px] text-black`}
							placeholder="Password"
							placeholderTextColor="black"
							onChangeText={(text) => setPassword(text)}
							secureTextEntry
						/>
					</View>
					<TouchableOpacity>
						<Text style={tw`text-black text-base`}>Forgot Password?</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`w-[60%] bg-[#C81025] h-[50px] rounded-[25px] items-center  justify-center mt-[40px] mb-[10px] `}
						onPress={signIn}
					>
						<Text style={tw`text-white font-bold text-base`}>LOGIN</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};
export default SignInScreen;
