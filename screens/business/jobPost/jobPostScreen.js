import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../../../components/commonText";
import MyStatusBar from "../../../components/myStatusBar";
import {
  Colors,
  CommonStyles,
  Fonts,
  screenHeight,
  Sizes,
} from "../../../constants/styles";

const rateList = ["Full Time", "Part Time", "Contract"];

const JobPostScreen = ({ navigation }) => {
  const [showRatesSheet, setShowRatesSheet] = useState(false);
  const [selectedRate, setSelectedRate] = useState(rateList[0]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
          style={{ paddingHorizontal: 20 }}
        >
          {titleInfo()}
          {salaryInfo()}
          {locationInfo()}
          {summaryInfo()}
          {requirementInfo()}
          {addtionalInfo()}
          {postButton()}
        </ScrollView>
      </View>
      {ratesSheet()}
    </View>
  );

  function ratesSheet() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showRatesSheet}
        onRequestClose={() => {
          setShowRatesSheet(false);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setShowRatesSheet(false);
          }}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <View
              style={{
                maxHeight: screenHeight / 1.5,
                backgroundColor: Colors.whiteColor,
              }}
            >
              <Text
                style={{
                  ...Fonts.blackColor20Bold,
                  textAlign: "center",
                  margin: Sizes.fixPadding * 1.5,
                }}
              >
                Employment type
              </Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      backgroundColor: Colors.whiteColor,
                      paddingBottom: Sizes.fixPadding,
                    }}
                  >
                    {rateList.map((item, index) => (
                      <TouchableOpacity
                        key={`${index}`}
                        activeOpacity={0.7}
                        onPress={() => {
                          setSelectedRate(item);
                          setShowRatesSheet(false);
                        }}
                        style={{
                          ...styles.rowSpaceBetween,
                          marginHorizontal: Sizes.fixPadding * 2.0,
                          marginBottom: Sizes.fixPadding + 2.0,
                        }}
                      >
                        <Text
                          key={`${item}`}
                          style={
                            selectedRate === item
                              ? { ...Fonts.primaryColor16Medium }
                              : { ...Fonts.grayColor16Regular }
                          }
                        >
                          {item}
                        </Text>
                        {selectedRate === item ? (
                          <MaterialIcons
                            name="check"
                            color={Colors.primaryColor}
                            size={20}
                          />
                        ) : null}
                      </TouchableOpacity>
                    ))}
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function titleInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Title</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Title"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function salaryInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Salary (AUD / year)</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ ...CommonStyles.textFieldWrapper, flex: 1 }}>
            <TextInput
              placeholder="(ex. 120000)"
              keyboardType="numeric"
              placeholderTextColor={Colors.grayColor}
              style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
              cursorColor={Colors.primaryColor}
              selectionColor={Colors.primaryColor}
            />
          </View>
          <View style={{ marginLeft: Sizes.fixPadding * 2.0 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowRatesSheet(true)}
              style={{
                ...CommonStyles.textFieldWrapper,
                ...styles.rowSpaceBetween,
              }}
            >
              <Text style={{ ...Fonts.blackColor16Medium }}>
                {selectedRate}
              </Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={24}
                color={Colors.blackColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function locationInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Location</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="ex. Sydney, Australia"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function summaryInfo() {
    return (
      <View
        style={{
          marginVertical: Sizes.fixPadding,
        }}
      >
        <Text style={{ ...Fonts.grayColor16Regular }}>Summary</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Job summary..."
            placeholderTextColor={Colors.grayColor}
            style={{
              ...Fonts.blackColor14Regular,
              height: Platform.OS == "ios" ? 120 : null,
            }}
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top"
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function requirementInfo() {
    return (
      <View
        style={{
          marginVertical: Sizes.fixPadding,
        }}
      >
        <Text style={{ ...Fonts.grayColor16Regular }}>Requirements*</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Job essential requirements..."
            placeholderTextColor={Colors.grayColor}
            style={{
              ...Fonts.blackColor14Regular,
              height: Platform.OS == "ios" ? 120 : null,
            }}
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top"
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function addtionalInfo() {
    return (
      <View
        style={{
          marginVertical: Sizes.fixPadding,
        }}
      >
        <Text style={{ ...Fonts.grayColor16Regular }}>Additional Notes</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Benefits like health insurance and paid time off..."
            placeholderTextColor={Colors.grayColor}
            style={{
              ...Fonts.blackColor14Regular,
              height: Platform.OS == "ios" ? 120 : null,
            }}
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top"
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function postButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.push("JobDetail", {
            isPoster: true,
          });
        }}
        style={{
          ...CommonStyles.buttonStyle,
          margin: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Post</Text>
      </TouchableOpacity>
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
        <Text style={{ ...CommonStyles.headerTextStyle }}>Post Job</Text>
        <View></View>
      </View>
    );
  }
};

export default JobPostScreen;

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
