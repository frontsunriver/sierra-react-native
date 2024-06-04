import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Colors, CommonStyles, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";

const EditProfileScreen = ({ navigation }) => {
  const [fullName, setfullName] = useState("Samantha Smith");
  const [email, setemail] = useState("samanthasmith@gmail.com");
  const [mobileNumber, setmobileNumber] = useState("+(444) 185-8956");
  const [password, setpassword] = useState("123456678");
  const [showProfilePicChangeSheet, setshowProfilePicChangeSheet] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
        >
          {profilePic()}
          {fullNameInfo()}
          {emailInfo()}
          {mobileNumberInfo()}
          {passwordInfo()}
          {saveButton()}
        </ScrollView>
      </View>
      {changeProfilePicSheet()}
    </View>
  );

  function changeProfilePicSheet() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showProfilePicChangeSheet}
        onRequestClose={() => { setshowProfilePicChangeSheet(false) }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => { setshowProfilePicChangeSheet(false) }}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { }}
              style={{ backgroundColor: Colors.whiteColor }}
            >
              <View
                style={{
                  backgroundColor: Colors.whiteColor,
                  paddingVertical: Sizes.fixPadding * 2.0,
                }}
              >
                <Text style={styles.sheetHeaderStyle}>Change Profile Photo</Text>
                <View style={styles.sheetDivider} />
                <Text
                  onPress={() => {
                    setshowProfilePicChangeSheet(false);
                  }}
                  style={{ ...Fonts.redColor16Regular, textAlign: "center" }}
                >
                  Remove Current Photo
                </Text>
                <View style={styles.sheetDivider} />
                <Text
                  onPress={() => {
                    setshowProfilePicChangeSheet(false);
                  }}
                  style={{ ...Fonts.blackColor16Regular, textAlign: "center" }}
                >
                  Take Photo
                </Text>
                <View style={styles.sheetDivider} />
                <Text
                  onPress={() => {
                    setshowProfilePicChangeSheet(false);
                  }}
                  style={{ ...Fonts.blackColor16Regular, textAlign: "center" }}
                >
                  Choose From Library
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function saveButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.pop();
        }}
        style={{
          ...CommonStyles.buttonStyle,
          marginVertical: Sizes.fixPadding,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Save</Text>
      </TouchableOpacity>
    );
  }

  function passwordInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Password</Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            value={password}
            onChangeText={(val) => setpassword(val)}
            secureTextEntry={true}
          />
        </View>
      </View>
    );
  }

  function mobileNumberInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Mobile Number</Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            value={mobileNumber}
            onChangeText={(val) => setmobileNumber(val)}
            keyboardType="phone-pad"
          />
        </View>
      </View>
    );
  }

  function emailInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor16Regular }}>Email Address</Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            value={email}
            onChangeText={(val) => setemail(val)}
            keyboardType="email-address"
          />
        </View>
      </View>
    );
  }

  function fullNameInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding * 2.5,
        }}
      >
        <Text style={{ ...Fonts.grayColor16Regular }}>Full Name</Text>
        <View style={CommonStyles.textFieldWrapper}>
          <TextInput
            placeholder="Enter Full Name"
            placeholderTextColor={Colors.grayColor}
            style={{ ...Fonts.blackColor16Medium, height: 30.0 }}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            value={fullName}
            onChangeText={(val) => setfullName(val)}
          />
        </View>
      </View>
    );
  }

  function profilePic() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../../assets/images/users/user1.jpeg")}
          style={styles.profilePicStyle}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setshowProfilePicChangeSheet(true);
          }}
          style={styles.picChangeIconWrapStyle}
        >
          <MaterialIcons
            name="camera-alt"
            size={14}
            color={Colors.whiteColor}
          />
        </TouchableOpacity>
      </View>
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
        <Text style={CommonStyles.headerTextStyle}>Edit Profile</Text>
      </View>
    );
  }
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  sheetHeaderStyle: {
    ...Fonts.blackColor20Bold,
    textAlign: "center",
    marginBottom: Sizes.fixPadding - 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  sheetDivider: {
    backgroundColor: Colors.lightGrayColor,
    height: 1.0,
    marginVertical: Sizes.fixPadding + 5.0,
  },
  picChangeIconWrapStyle: {
    width: 32.0,
    height: 32.0,
    borderRadius: 16.0,
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.whiteColor,
    borderWidth: 3.0,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -10.0,
    right: 0,
  },
  profilePicStyle: {
    width: 100.0,
    height: 100.0,
    borderRadius: 50.0,
    overflow: "hidden",
  },
});
