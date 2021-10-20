import React, { useState, useEffect } from "react";
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
import DateTimePicker from "@react-native-community/datetimepicker";

const DemographicsTwo = ({ navigation }) => {
	const [gender, setGender] = useState("");
	const [maritalstatus, setMaritalStatus] = useState("initialState");
	const [job, setJob] = useState("");
	const [otherjob, setOtherjob] = useState();
	const [studentOrTeacher, setStudentOrTeacher] = useState("initialState");
	const [familyName, setFamilyName] = useState("");
	const [nationality, setNationality] = useState("");
	const [nationalID, setNationalID] = useState("");
	const [firstPhoneNumber, setFirstPhoneNumber] = useState("");
	const [secPhoneNumber, setSecPhoneNumber] = useState("");

	const [onSetDate, setonSetDate] = useState(new Date());
	const [birthDate, setBirthDate] = useState(new Date());
	const [showBirthDate, setShowBirthDate] = useState(false);
	const [formatedBirthDate, setFormatedBirthDate] = useState("mm/dd/yyyy");
	const [showOnSetDate, setShowOnSetDate] = useState(false);
	const [formatedDate, setFormatedDate] = useState("mm/dd/yyyy");

	const onChangeSetDate = (event, selectedDate) => {
		const currentDate = selectedDate || onSetDate;
		setShowOnSetDate(Platform.OS === "ios");
		setonSetDate(currentDate);
	};
	const onChangeBirthDate = (event, selectedDate) => {
		const currentDate = selectedDate || onSetDate;
		setShowBirthDate(Platform.OS === "ios");
		setBirthDate(currentDate);
	};
	function getFormattedDate(date) {
		let year = date.getFullYear();
		let month = (1 + date.getMonth()).toString();
		month = month.length > 1 ? month : "0" + month;
		let day = date.getDate().toString();
		day = day.length > 1 ? day : "0" + day;
		return day + "/" + month + "/" + year;
	}

	useEffect(() => {
		setFormatedDate(getFormattedDate(onSetDate));
		setFormatedBirthDate(getFormattedDate(birthDate));
	}, [onSetDate, birthDate]);
	return (
		<ScrollView style={tw`bg-white  h-full`}>
			<View style={tw`mt-[80px]`}>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Gender</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374]`}
					>
						<Picker
							selectedValue={gender}
							onValueChange={(itemValue) => setGender(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Test" value="Test" />
							<Picker.Item label="Test2" value="Test2" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}> Date Of Birth</Text>
					</View>
					<TouchableOpacity
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
						onPress={() => {
							setShowBirthDate(!showBirthDate);
						}}
					>
						<Text style={tw`text-white`}>{formatedBirthDate}</Text>
						{showBirthDate && (
							<DateTimePicker
								testID="dateTimePicker"
								value={birthDate}
								mode={"date"}
								is24Hour={true}
								display="default"
								onChange={onChangeBirthDate}
							/>
						)}
					</TouchableOpacity>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Job</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374]`}
					>
						<Picker
							selectedValue={job}
							onValueChange={(itemValue) => setJob(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Female" value="Female" />
							<Picker.Item label="Male" value="Male" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Marital Status</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374]`}
					>
						<Picker
							selectedValue={job}
							onValueChange={(itemValue) => setMaritalStatus(itemValue)}
							style={tw`text-white`}
							dropdownIconColor="white"
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Developer" value="developer" />
							<Picker.Item label="Back-end" value="backend" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>
							في حالة الوظيفة أخري - اذكرها
						</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setOtherjob(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>
							فى حالة الوظيفة طالب/مدرس حدد المرحلة
						</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setStudentOrTeacher(text)}
						/>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>
							في حالة طالب/مدرس تصنيف المدرسة
						</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setNationalID(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>
							مكان العمل/اسم المدرسة
						</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px]  justify-center px-[16px] border-[#212121] border  bg-[#294374]`}
					>
						<TextInput
							style={tw` text-white`}
							onChangeText={(text) => setFirstPhoneNumber(text)}
						/>
					</View>
				</View>
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}> Onset Date</Text>
					</View>
					<TouchableOpacity
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
						onPress={() => {
							setShowOnSetDate(!showOnSetDate);
						}}
					>
						<Text style={tw`text-white`}>{formatedDate}</Text>
						{showOnSetDate && (
							<DateTimePicker
								testID="dateTimePicker"
								value={onSetDate}
								mode={"date"}
								is24Hour={true}
								display="calendar"
								onChange={onChangeSetDate}
							/>
						)}
					</TouchableOpacity>
				</View>
			</View>

			<View
				style={tw`mb-[32px] mt-[40px] items-center flex-1 flex-row justify-between  mx-4`}
			>
				<TouchableOpacity
					style={tw`  rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.goBack()}
				>
					<Text style={tw`text-white`}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw` rounded-xl  bg-[#294374] text-white px-12 py-4 justify-center items-center  `}
					onPress={() => navigation.navigate("FourthStep")}
				>
					<Text style={tw`text-white`}>Next</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
export default DemographicsTwo;
