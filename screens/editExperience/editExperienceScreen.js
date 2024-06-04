import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors, CommonStyles, Fonts, Sizes } from "../../constants/styles";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text } from "../../components/commonText";
import { TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import MyStatusBar from "../../components/myStatusBar";

const EditExperienceScreen = ({ navigation }) => {
  const [presentTitle, setpresentTitle] = useState(
    "Sr.UI/UX Designer (Team Lead)"
  );
  const [companyName, setcompanyName] = useState("Infosys Technologies");
  const [pastTitle, setpastTitle] = useState("Jr.UI/UX Designer");
  const [pastCompanyName, setpastCompanyName] = useState("Android");
  const [date, setDate] = useState(new Date());
  const monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sup",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [showEndDateCalendarDialog, setshowEndDateCalendarDialog] =
    useState(false);
  const [dateSelectionFor, setdateSelectionFor] = useState("");
  const [presentEndDate, setpresentEndDate] = useState("");
  const [pastEndDate, setpastEndDate] = useState(new Date(2023, 2, 20));
  const [showStartDateCalendarDialog, setshowStartDateCalendarDialog] =
    useState(false);
  const [presentStartDate, setpresentStartDate] = useState(
    new Date(2023, 2, 20)
  );
  const [pastStartDate, setpastStartDate] = useState(new Date(2021, 10, 20));

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {presentInfo()}
          {pastInfo()}
        </ScrollView>
      </View>
      {saveButton()}
    </View>
  );

  function showStartDateCalendar() {
    const onChange = (event, selectedDate) => {
      if (event.type == "set") {
        const currentDate = selectedDate;
        if (dateSelectionFor == "present") {
          setpresentStartDate(currentDate);
        } else {
          setpastStartDate(currentDate);
        }
      }
      setshowStartDateCalendarDialog(false);
    };
    return (
      showStartDateCalendarDialog && (
        <DateTimePicker
          value={date}
          mode={"date"}
          maximumDate={new Date()}
          onChange={onChange}
          accentColor={Colors.primaryColor}
          style={{ margin: 20, alignSelf: 'center', }}
        />
      )
    );
  }

  function showEndDateCalendar() {
    const onChange = (event, selectedDate) => {
      if (event.type == "set") {
        const currentDate = selectedDate;
        if (dateSelectionFor == "present") {
          setpresentEndDate(currentDate);
        } else {
          setpastEndDate(currentDate);
        }
      }
      setshowEndDateCalendarDialog(false);
    };
    return (
      showEndDateCalendarDialog && (
        <DateTimePicker
          value={date}
          mode={"date"}
          minimumDate={dateSelectionFor == "present" ? new Date() : null}
          maximumDate={dateSelectionFor == "present" ? null : new Date()}
          onChange={onChange}
          accentColor={Colors.primaryColor}
          style={{ margin: 20, alignSelf: 'center', }}
        />
      )
    );
  }

  function saveButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.pop();
        }}
        style={{ ...CommonStyles.buttonStyle, margin: Sizes.fixPadding * 2.0 }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Save</Text>
      </TouchableOpacity>
    );
  }

  function pastInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.blackColor19SemiBold }}>Past</Text>
        {pastTitleInfo()}
        {pastCompanyNameInfo()}
        {dateSelectionFor !== "present" && showEndDateCalendar()}
        {dateSelectionFor !== "present" && showStartDateCalendar()}
        {pastStartDateAndEndDateInfo()}        
      </View>
    );
  }

  function pastStartDateAndEndDateInfo() {
    return (
      <View
        style={{
          marginVertical: Sizes.fixPadding * 2.0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, marginRight: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.grayColor16Regular }}>Start Date</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setdateSelectionFor("past");
              setshowStartDateCalendarDialog(true);
            }}
            style={{
              ...CommonStyles.textFieldWrapper,
              ...styles.rowSpaceBetween,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.blackColor16Medium, flex: 1 }}
            >
              {monthsList[pastStartDate.getMonth()]}{" "}
              {pastStartDate.getFullYear()}
            </Text>
            <MaterialCommunityIcons
              name="calendar-minus"
              size={20}
              color={Colors.primaryColor}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.grayColor16Regular }}>End Date</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setdateSelectionFor("past");
              setshowEndDateCalendarDialog(true);
            }}
            style={{
              ...CommonStyles.textFieldWrapper,
              ...styles.rowSpaceBetween,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.blackColor16Medium, flex: 1 }}
            >
              {monthsList[pastEndDate.getMonth()]} {pastEndDate.getFullYear()}
            </Text>
            <MaterialCommunityIcons
              name="calendar-minus"
              size={20}
              color={Colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function pastCompanyNameInfo() {
    return (
      <View>
        <Text style={{ ...Fonts.grayColor16Regular }}>Company Name</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Company Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={pastCompanyName}
            onChangeText={(val) => setpastCompanyName(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function pastTitleInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Title</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Title"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={pastTitle}
            onChangeText={(val) => setpastTitle(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function presentInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding,
        }}
      >
        <Text style={{ ...Fonts.blackColor19SemiBold }}>Present</Text>
        {presentTitleInfo()}
        {presentCompanyNameInfo()}
        {presentStartDateAndEndDateInfo()}
        {dateSelectionFor == "present" && showEndDateCalendar()}
        {dateSelectionFor == "present" && showStartDateCalendar()}
      </View>
    );
  }

  function presentStartDateAndEndDateInfo() {
    return (
      <View
        style={{
          marginVertical: Sizes.fixPadding * 2.0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, marginRight: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.grayColor16Regular }}>Start Date</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setdateSelectionFor("present");
              setshowStartDateCalendarDialog(true);
            }}
            style={{
              ...CommonStyles.textFieldWrapper,
              ...styles.rowSpaceBetween,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.blackColor16Medium, flex: 1 }}
            >
              {monthsList[presentStartDate.getMonth()]}{" "}
              {presentStartDate.getFullYear()}
            </Text>
            <MaterialCommunityIcons
              name="calendar-minus"
              size={20}
              color={Colors.primaryColor}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.grayColor16Regular }}>End Date</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setdateSelectionFor("present");
              setshowEndDateCalendarDialog(true);
            }}
            style={{
              ...CommonStyles.textFieldWrapper,
              ...styles.rowSpaceBetween,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.blackColor16Medium, flex: 1 }}
            >
              {presentEndDate == ""
                ? "Present"
                : `${monthsList[presentEndDate.getMonth()]
                } ${presentEndDate.getFullYear()}`}
            </Text>
            {presentEndDate == "" ? null : (
              <MaterialCommunityIcons
                name="calendar-minus"
                size={20}
                color={Colors.primaryColor}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function presentCompanyNameInfo() {
    return (
      <View>
        <Text style={{ ...Fonts.grayColor16Regular }}>Company Name</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Company Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={companyName}
            onChangeText={(val) => setcompanyName(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function presentTitleInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Title</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Title"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={presentTitle}
            onChangeText={(val) => setpresentTitle(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View
        style={{ ...styles.rowSpaceBetween, margin: Sizes.fixPadding * 2.0 }}
      >
        <MaterialIcons
          name="keyboard-backspace"
          size={26}
          color={Colors.blackColor}
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text style={{ ...CommonStyles.headerTextStyle }}>Edit Experience</Text>
        <Feather name="plus-square" size={22} color={Colors.blackColor} />
      </View>
    );
  }
};

export default EditExperienceScreen;

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
