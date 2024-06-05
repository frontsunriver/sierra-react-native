import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";
import {
  Colors,
  CommonStyles,
  Fonts,
  Sizes,
  screenWidth,
} from "../../constants/styles";

const VerificationScreen = ({ navigation }) => {
  const [otpInput, setotpInput] = useState("");
  const [isLoading, setisLoading] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          {enterOtpInfo()}
          {otpFields()}
          {continueButton()}
        </ScrollView>
        {loadingDialog()}
      </View>
    </View>
  );

  function loadingDialog() {
    return (
      <Modal animationType="slide" transparent={true} visible={isLoading}>
        <TouchableOpacity
          activeOpacity={1}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ justifyContent: "center", flex: 1 }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {}}
              style={{ ...styles.dialogStyle }}
            >
              <ActivityIndicator
                color={Colors.primaryColor}
                style={{
                  alignSelf: "center",
                  transform: [{ scale: Platform.OS == "ios" ? 1.5 : 2.0 }],
                }}
              />
              <Text
                style={{
                  marginTop: Sizes.fixPadding + 5.0,
                  textAlign: "center",

                  ...Fonts.blackColor16Regular,
                }}
              >
                Please wait...
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function otpFields() {
    return (
      <View className="px-[20px] mt-5">
        <OtpInput
          numberOfDigits={6}
          focusColor={Colors.primaryColor}
          onTextChange={(text) => {
            if (text.length == 6) {
              setotpInput(text);
              setisLoading(true);
              setTimeout(() => {
                setisLoading(false);
                navigation.push("BottomTabBar");
              }, 2000);
            }
          }}
          theme={{
            pinCodeContainerStyle: { ...styles.textFieldStyle },
            pinCodeTextStyle: { ...Fonts.blackColor16Medium },
            focusedPinCodeContainerStyle: { borderWidth: 1.5 },
          }}
        />
      </View>
    );
  }

  function continueButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setisLoading(true);
          setTimeout(() => {
            setisLoading(false);
            navigation.push("BottomTabBar");
          }, 2000);
        }}
        style={{ ...CommonStyles.buttonStyle, margin: Sizes.fixPadding * 2.0 }}
        className="mt-10"
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Continue</Text>
      </TouchableOpacity>
    );
  }

  function enterOtpInfo() {
    return (
      <Text
        style={{
          ...Fonts.grayColor16Regular,
          marginVertical: Sizes.fixPadding,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        Enter 4 digit verification code. We just sent you on given number.
      </Text>
    );
  }

  function header() {
    return (
      <View
        style={{
          margin: Sizes.fixPadding * 2.0,
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="keyboard-backspace"
          size={26}
          color={Colors.blackColor}
          style={{ position: "absolute", zIndex: 100 }}
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text style={CommonStyles.headerTextStyle}>Verification</Text>
      </View>
    );
  }
};

export default VerificationScreen;

const styles = StyleSheet.create({
  textFieldStyle: {
    borderRadius: Sizes.fixPadding - 5.0,
    backgroundColor: Colors.extraLightGrayColor,
    borderWidth: 0,
    width: screenWidth / 8.5,
    height: screenWidth / 8.5,
  },
  dialogStyle: {
    width: "85%",
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingBottom: Sizes.fixPadding * 2.5,
    paddingTop: Sizes.fixPadding * 3.0,
    elevation: 3.0,
    alignSelf: "center",
  },
});
