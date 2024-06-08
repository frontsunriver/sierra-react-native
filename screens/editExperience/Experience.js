import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "../../components/commonText";
import { Colors, CommonStyles, Fonts, Sizes } from "../../constants/styles";

const Experience = ({ data = {}, onUpdated = false, editable = true }) => {
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
  const [showStartDateCalendarDialog, setShowStartDateCalendarDialog] =
    useState(false);
  const [showEndDateCalendarDialog, setShowEndDateCalendarDialog] =
    useState(false);

  function titleInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Title</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Title"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={data.title}
            onChangeText={(val) =>
              onUpdated &&
              onUpdated({
                ...data,
                title: val,
              })
            }
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function companyInfo() {
    return (
      <View>
        <Text style={{ ...Fonts.grayColor16Regular }}>Company Name</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Company Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={data.company}
            onChangeText={(val) =>
              onUpdated &&
              onUpdated({
                ...data,
                company: val,
              })
            }
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function dateInfo() {
    return (
      <View
        style={{
          marginVertical: Sizes.fixPadding * 2.0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, marginRight: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.grayColor16Regular }}>From</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setShowStartDateCalendarDialog(true);
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
              {data?.started_at && (
                <>
                  {monthsList[new Date(data.started_at).getMonth()]}{" "}
                  {new Date(data.started_at).getFullYear()}
                </>
              )}
            </Text>
            <MaterialCommunityIcons
              name="calendar-minus"
              size={20}
              color={Colors.primaryColor}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.grayColor16Regular }}>To</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setShowEndDateCalendarDialog(true);
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
              {data.ended_at
                ? `${monthsList[new Date(data.ended_at).getMonth()]} ${new Date(
                    data.ended_at
                  ).getFullYear()}`
                : "Present"}
            </Text>
            {data.ended_at && (
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

  function renderStartDateCalendar() {
    const onChange = (event, selectedDate) => {
      if (event.type == "set") {
        onUpdated &&
          onUpdated({
            ...data,
            started_at: selectedDate,
          });
      }
      setShowStartDateCalendarDialog(false);
    };
    return (
      <DateTimePicker
        value={new Date(data.started_at)}
        mode={"date"}
        maximumDate={data?.ended_at ? new Date(data.ended_at) : new Date()}
        onChange={onChange}
        accentColor={Colors.primaryColor}
        style={{ margin: 20, alignSelf: "center" }}
      />
    );
  }

  function renderEndDateCalendar() {
    const onChange = (event, selectedDate) => {
      if (event.type == "set") {
        onUpdated &&
          onUpdated({
            ...data,
            ended_at: selectedDate,
          });
      }
      setShowEndDateCalendarDialog(false);
    };
    return (
      <DateTimePicker
        value={data?.ended_at ? new Date(data.ended_at) : new Date()}
        mode={"date"}
        minimumDate={data?.started_at ? new Date(data.started_at) : null}
        maximumDate={new Date()}
        onChange={onChange}
        accentColor={Colors.primaryColor}
        style={{ margin: 20, alignSelf: "center" }}
      />
    );
  }

  return (
    <View
      style={{
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
      }}
    >
      {data.isPresent && (
        <Text style={{ ...Fonts.blackColor19SemiBold }}>Present</Text>
      )}
      {titleInfo()}
      {companyInfo()}
      {dateInfo()}
      {showStartDateCalendarDialog && renderStartDateCalendar()}
      {showEndDateCalendarDialog && renderEndDateCalendar()}
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
