import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from "react-native";
import tw from "twrnc";
import { Picker } from "@react-native-picker/picker";

import TitleComponent from "../TitleComponent";
const DemographicsOne = ({ navigation }) => {
	const [firstName, setFirstName] = useState("");
	const [familyName, setFamilyName] = useState("");
	const [nationality, setNationality] = useState("");
	const [nationalID, setNationalID] = useState("");
	const [firstPhoneNumber, setFirstPhoneNumber] = useState("");
	const [secPhoneNumber, setSecPhoneNumber] = useState("");
	return (
		<ScrollView style={tw`bg-white  h-full`}>
			<View style={tw`mt-[80px]`}>
				<TitleComponent title={"Demographics"} />
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>First Name</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setFirstName(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Second Name</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setFamilyName(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Family Name</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setFamilyName(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Nationality</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374]`}
					>
						<Picker
							selectedValue={nationality}
							onValueChange={(itemValue) => setNationality(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Egyptian" value="Egyptian" />
							<Picker.Item label="Afghan" value="Cairo" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>National ID</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setNationalID(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Phone No</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setFirstPhoneNumber(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Phone No2</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setSecPhoneNumber(text)}
						/>
					</View>
				</View>
			</View>
			<View
				style={tw`mb-[32px] mt-[40px] items-center flex-1 flex-row justify-between  mx-4`}
			>
				<TouchableOpacity
					style={tw` rounded-xl bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.goBack()}
				>
					<Text style={tw`text-white`}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw` rounded-xl bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.navigate("ThirdStep")}
				>
					<Text style={tw`text-white`}>Next</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
export default DemographicsOne;
