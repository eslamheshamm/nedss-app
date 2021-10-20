import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from "react-native";
import tw from "twrnc";
import { Picker } from "@react-native-picker/picker";
import TitleComponent from "../TitleComponent";
const Residence = ({ navigation }) => {
	const [selectedDepartment, setSelectedDepartment] = useState("");
	const [dristrict, setDristrict] = useState("");
	const [healthOffice, setHealthOffice] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [region, setRegion] = useState("");
	const enableDistrict = selectedDepartment ? true : false;
	const enabletHealthOffice = dristrict ? true : false;
	return (
		<ScrollView style={tw`bg-white  h-full`}>
			<View style={tw`mt-[80px]`}>
				<TitleComponent title="Residence" />

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Governate</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<Picker
							selectedValue={selectedDepartment}
							onValueChange={(itemValue) => setSelectedDepartment(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Alexandria" value="Alexandria" />
							<Picker.Item label="Cairo" value="Cairo" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>City / Province</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<Picker
							enabled={enableDistrict}
							selectedValue={dristrict}
							onValueChange={(itemValue) => setDristrict(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />

							<Picker.Item label="Giza" value="giza" />
							<Picker.Item label="Cairo" value="cairo" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Helath Office</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<Picker
							enabled={enabletHealthOffice}
							selectedValue={healthOffice}
							onValueChange={(itemValue) => setHealthOffice(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />

							<Picker.Item label="Test" value="test" />
							<Picker.Item label="Test2" value="test2" />
						</Picker>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Address</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setAddress(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>City/Province</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<Picker
							selectedValue={city}
							onValueChange={(itemValue) => setCity(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Alexandria" value="Alexandria" />
							<Picker.Item label="Cairo" value="Cairo" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Governate</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<Picker
							selectedValue={region}
							onValueChange={(itemValue) => setRegion(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Test" value="Test" />
						</Picker>
					</View>
				</View>
			</View>
			<View
				style={tw`mb-[32px] mt-[40px] items-center flex-1 flex-row justify-between  mx-4`}
			>
				<TouchableOpacity
					style={tw` rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.goBack()}
				>
					<Text style={tw`text-white`}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw` rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.navigate("FifthStep")}
				>
					<Text style={tw`text-white`}>Next</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
export default Residence;
