import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";
import {
  Colors,
  CommonStyles,
  Fonts,
  Sizes,
  screnHeight,
} from "../../constants/styles";

const degreesList = [
  "Bachelor's Degree",
  "Professional Certificates",
  "Undergraduate Degree",
  "Transfer Degree",
  "Associate Degree",
  "Graduate Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Degree",
  "Specialist Degree",
];

const EditEducationScreen = ({ navigation }) => {
  const [universityName, setuniversityName] = useState(
    "The University of Sydney"
  );
  const [graduationYear, setgraduationYear] = useState("2018");
  const [selectedDegree, setselectedDegree] = useState(degreesList[6]);
  const [fieldOfStudy, setfieldOfStudy] = useState("Computer Science");
  const [showDegreeSheet, setshowDegreeSheet] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {universityNameInfo()}
          {graduationYearInfo()}
          {degreeInfo()}
          {fieldOfStudyInfo()}
          {saveButton()}
        </ScrollView>
      </View>
      {degreesSheet()}
    </View>
  );

  function degreesSheet() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDegreeSheet}
        onRequestClose={() => {
          setshowDegreeSheet(false);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setshowDegreeSheet(false);
          }}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={{
              maxHeight: screnHeight - 150,
              paddingBottom: Sizes.fixPadding,
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
              Degrees
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableWithoutFeedback>
                <View>
                  {degreesList.map((item, index) => (
                    <TouchableOpacity
                      key={`${index}`}
                      activeOpacity={0.7}
                      onPress={() => {
                        setselectedDegree(item);
                        setshowDegreeSheet(false);
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
                          selectedDegree === item
                            ? { ...Fonts.primaryColor16Medium }
                            : { ...Fonts.grayColor16Regular }
                        }
                      >
                        {item}
                      </Text>
                      {selectedDegree === item ? (
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
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  }

  function saveButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.pop()}
        style={{
          ...CommonStyles.buttonStyle,
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginVertical: Sizes.fixPadding,
        }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Save</Text>
      </TouchableOpacity>
    );
  }

  function fieldOfStudyInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Field of Study</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Field of Study"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={fieldOfStudy}
            onChangeText={(val) => setfieldOfStudy(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function degreeInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Degree</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setshowDegreeSheet(true);
          }}
          style={{
            ...CommonStyles.textFieldWrapper,
            ...styles.rowSpaceBetween,
          }}
        >
          <Text style={{ ...Fonts.blackColor16Medium }}>{selectedDegree}</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={Colors.blackColor}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function graduationYearInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Graduation Year</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter Graduation Year"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={graduationYear}
            onChangeText={(val) => setgraduationYear(val)}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  }

  function universityNameInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding,
        }}
      >
        <Text style={{ ...Fonts.grayColor16Regular }}>University Name</Text>
        <View style={{ ...CommonStyles.textFieldWrapper }}>
          <TextInput
            placeholder="Enter University Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            value={universityName}
            onChangeText={(val) => setuniversityName(val)}
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
        <Text style={{ ...CommonStyles.headerTextStyle }}>Edit Education</Text>
        <Feather name="plus-square" size={22} color={Colors.blackColor} />
      </View>
    );
  }
};

export default EditEducationScreen;

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
