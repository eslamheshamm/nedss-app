import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Picker } from "@react-native-picker/picker";
import TitleComponent from "../TitleComponent";
import DateTimePicker from "@react-native-community/datetimepicker";

const GovernateAndReporting = ({ navigation }) => {
	const [selectedDepartment, setSelectedDepartment] = useState("");
	const [dristrict, setDristrict] = useState("");
	const [reportingSource, setReportingSource] = useState("");
	const [date, setDate] = useState(new Date(1598051730000));
	const [show, setShow] = useState(false);
	const [formatedDate, setFormatedDate] = useState("mm/dd/yyyy");
	const enableDistrict = selectedDepartment ? true : false;
	const enableReportingSource = dristrict ? true : false;

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
	};

	const showMode = () => {
		setShow(!show);
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
		setFormatedDate(getFormattedDate(date));
	}, [date]);
	return (
		<View style={tw`bg-white  h-full`}>
			<View style={tw`mt-[80px]`}>
				<TitleComponent title="General Inforamation" />
				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base`}>Governate</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] text-white border bg-[#294374]`}
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
						<Text style={tw` my-2 font-bold text-base`}>District</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374]`}
					>
						<Picker
							enabled={enableDistrict}
							selectedValue={dristrict}
							onValueChange={(itemValue) => setDristrict(itemValue)}
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
						<Text style={tw` my-2 font-bold text-base`}>Reporting Source</Text>
					</View>
					<View
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374]`}
					>
						<Picker
							enabled={enableReportingSource}
							selectedValue={reportingSource}
							onValueChange={(itemValue) => setReportingSource(itemValue)}
							style={tw`text-white font-bold`}
							dropdownIconColor="white"
							dis
						>
							<Picker.Item label="--Not Selected--" value="--Not Selected--" />
							<Picker.Item label="Alexandria" value="Alexandria" />
							<Picker.Item label="Cairo" value="Cairo" />
						</Picker>
					</View>
				</View>

				<View style={tw`mx-4`}>
					<View>
						<Text style={tw` my-2 font-bold text-base `}> Reporting Date</Text>
					</View>
					<TouchableOpacity
						style={tw`h-[48px] rounded-[8px] justify-center px-[16px] border-[#212121] border bg-[#294374] text-white`}
						onPress={showMode}
					>
						<Text style={tw`text-white`}>{formatedDate}</Text>
						{show && (
							<DateTimePicker
								testID="dateTimePicker"
								value={new Date()}
								mode={"date"}
								is24Hour={true}
								display="calendar"
								onChange={onChange}
							/>
						)}
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				style={tw`self-end mr-6 rounded-xl bg-black text-white px-12 py-4 justify-center items-center  mt-[80px] bg-[#294374]`}
				onPress={() => navigation.navigate("SecondtStep")}
			>
				<Text style={tw`text-white `}>Next</Text>
			</TouchableOpacity>
		</View>
	);
};
export default GovernateAndReporting;
