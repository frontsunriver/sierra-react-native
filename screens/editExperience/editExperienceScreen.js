import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, CommonStyles, Fonts, Sizes } from "../../constants/styles";
import Experience from "./Experience";

const tempExps = [
  {
    title: "Senior Software Engineer",
    company: "Microsoft",
    started_at: "2021-02-10T00:00:00",
    isPresent: true,
  },
  {
    title: "Full Stack Developer",
    company: "Sierra Connect",
    started_at: "2017-08-15T00:00:00",
    ended_at: "2020-01-12T00:00:00",
    isPresent: false,
  },
  {
    title: "Junior Android Developer",
    company: "Google",
    started_at: "2015-03-20T00:00:00",
    ended_at: "2017-05-05T00:00:00",
    isPresent: false,
  },
];
const EditExperienceScreen = ({ navigation }) => {
  const [experiences, setExperiences] = useState(tempExps);
  const [presentTitle, setpresentTitle] = useState("Senior Software Engineer");
  const [companyName, setcompanyName] = useState("Sierra Connect");
  const [pastTitle, setpastTitle] = useState("Full Stack Developer");
  const [pastCompanyName, setpastCompanyName] = useState("Microsoft");
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
  const [pastEndDate, setpastEndDate] = useState(new Date(2018, 8, 8));
  const [showStartDateCalendarDialog, setshowStartDateCalendarDialog] =
    useState(false);
  const [presentStartDate, setpresentStartDate] = useState(
    new Date(2021, 1, 12)
  );
  const [pastStartDate, setpastStartDate] = useState(new Date(2017, 4, 5));

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {experiences.map((_item, key) => (
            <Experience key={key} data={_item} />
          ))}
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
          style={{ margin: 20, alignSelf: "center" }}
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
          style={{ margin: 20, alignSelf: "center" }}
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

  function experienceInfo(data, key) {
    return (
      <View
        key={key}
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding,
        }}
      >
        {data.isPresent && (
          <Text style={{ ...Fonts.blackColor19SemiBold }}>Present</Text>
        )}
        {titleInfo(data)}
        {companyInfo(data)}
        {dateInfo(data)}
        {dateSelectionFor == "present" && showEndDateCalendar()}
        {dateSelectionFor == "present" && showStartDateCalendar()}
      </View>
    );
  }

  function companyInfo(data) {
    return (
      <View>
        <Text style={{ ...Fonts.grayColor16Regular }}>Company Name</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Company Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={data.company}
            onChangeText={(val) => setcompanyName(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function titleInfo(data) {
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Title</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Title"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={data.title}
            onChangeText={(val) => setpresentTitle(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function dateInfo(data) {
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
                : `${
                    monthsList[presentEndDate.getMonth()]
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
