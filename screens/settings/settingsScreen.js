import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, CommonStyles, Fonts, Sizes } from "../../constants/styles";

const SettingsScreen = ({ navigation }) => {
  const [showLogoutDialog, setshowLogoutDialog] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
        >
          {settingOption({
            iconName: "person",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Edit Profile",
            onPress: () => {
              navigation.push("EditProfile");
            },
          })}
          {settingOption({
            iconName: "notifications",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Notifications",
            onPress: () => {
              navigation.push("Notifications");
            },
          })}
          {settingOption({
            iconName: "article",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Applied Jobs",
            onPress: () => {
              navigation.push("AppliedJobs");
            },
          })}
          {settingOption({
            iconName: "share",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Share App",
            onPress: () => {},
          })}
          {settingOption({
            iconName: "headset",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Contact Us",
            onPress: () => {
              navigation.push("ContactUs");
            },
          })}
          {settingOption({
            iconName: "insert-drive-file",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Terms & Conditions",
            onPress: () => {
              navigation.push("TermsAndCondition");
            },
          })}
          {settingOption({
            iconName: "logout",
            boxColor: "#d9f3d9",
            iconColor: Colors.primaryColor,
            option: "Logout",
            onPress: () => {
              setshowLogoutDialog(true);
            },
          })}
        </ScrollView>
      </View>
      {logoutDialog()}
    </View>
  );

  function logoutDialog() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLogoutDialog}
        onRequestClose={() => {
          setshowLogoutDialog(false);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setshowLogoutDialog(false);
          }}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ justifyContent: "center", flex: 1 }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {}}
              style={{ ...styles.dialogStyle, alignSelf: "center" }}
            >
              <Text
                style={{
                  ...Fonts.blackColor18Medium,
                  margin: Sizes.fixPadding * 2.0,
                  textAlign: "center",
                }}
              >
                Are you sure to want to logout?
              </Text>
              <View style={styles.dialogButtonWrapStyle}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setshowLogoutDialog(false);
                  }}
                  style={{
                    ...styles.cancelLogoutButtonStyle,
                    marginRight: Sizes.fixPadding - 9.0,
                  }}
                >
                  <Text style={{ ...Fonts.whiteColor18SemiBold }}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setshowLogoutDialog(false);
                    navigation.push("Login");
                  }}
                  style={{
                    ...styles.cancelLogoutButtonStyle,
                    marginLeft: Sizes.fixPadding - 9.0,
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.whiteColor18SemiBold,
                      marginLeft: Sizes.fixPadding * 2.0,
                    }}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function settingOption({ iconName, boxColor, iconColor, option, onPress }) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.optionWrapStyle}
      >
        <View
          style={{
            ...styles.optionIconWrapStyle,
            backgroundColor: boxColor,
          }}
        >
          <MaterialIcons name={iconName} size={22} color={iconColor} />
        </View>
        <Text
          style={{
            flex: 1,
            ...Fonts.blackColor16Medium,
            marginLeft: Sizes.fixPadding + 5.0,
          }}
        >
          {option}
        </Text>
      </TouchableOpacity>
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
        <Text style={CommonStyles.headerTextStyle}>Settings</Text>
      </View>
    );
  }
};

export default SettingsScreen;

const styles = StyleSheet.create({
  optionWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Sizes.fixPadding * 3.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  optionIconWrapStyle: {
    width: 34.0,
    height: 34.0,
    borderRadius: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "center",
  },
  dialogStyle: {
    width: "85%",
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    padding: 0,
    overflow: "hidden",
    elevation: 3.0,
  },
  dialogButtonWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  cancelLogoutButtonStyle: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    padding: Sizes.fixPadding + 2.0,
  },
});
