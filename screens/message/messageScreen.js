import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";
import { Colors, Fonts, Sizes, screenWidth } from "../../constants/styles";

const userMessages = [
  {
    id: "1",
    message:
      "Hello, Michael Niemis!\n\nCongratulations!\nLorem ipsum dolor sit amet, consectetur\nadipiscing elit. Feugiat habitasse morbi elit\nullamcorper ipsum cras. Morbi pharetraeque\npulvinar venenatis potenti id parturient\ntristique.\n\nBest Regards,\nHiring Manager",
    isSender: false,
  },
  {
    id: "2",
    message: "Okay",
    isSender: true,
  },
];

const MessageScreen = ({ navigation }) => {
  const [messagesList, setMessagesList] = useState(userMessages);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "height" : null}
      style={{ flex: 1, backgroundColor: Colors.whiteColor }}
    >
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        {messages()}
      </View>
      {typeMessage()}
    </KeyboardAvoidingView>
  );

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="keyboard-backspace"
            size={26}
            color={Colors.blackColor}
            onPress={() => {
              navigation.pop();
            }}
            style={{ marginRight: Sizes.fixPadding * 2.0 }}
          />
          <Image
            source={require("../../assets/images/jobs/job1.png")}
            style={{ width: 46.0, height: 46.0, borderRadius: 23.0 }}
          />
          <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 2.0 }}>
            <Text style={{ ...Fonts.blackColor19SemiBold }}>PIEXEX</Text>
            <Text style={{ ...Fonts.grayColor16Regular }}>Online</Text>
          </View>
        </View>
        <MaterialIcons name="more-vert" size={26} color={Colors.blackColor} />
      </View>
    );
  }

  function messages() {
    const renderItem = ({ item }) => {
      return (
        <View
          style={{
            alignItems: item.isSender == true ? "flex-end" : "flex-start",
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginVertical: Sizes.fixPadding - 2.0,
          }}
        >
          {item.isSender ? (
            <View
              style={{
                ...styles.messageWrapStyle,
                backgroundColor: Colors.primaryColor,
              }}
            >
              <Text style={Fonts.whiteColor16Regular}>{item.message}</Text>
              <View style={styles.rightArrow}></View>
              <View style={styles.rightArrowOverlap}></View>
            </View>
          ) : (
            <View
              style={{
                ...styles.messageWrapStyle,
                backgroundColor: Colors.mediumGrayColor,
              }}
            >
              <Text style={Fonts.grayColor16Regular}>{item.message}</Text>
              <View style={styles.leftArrow}></View>
              <View style={styles.leftArrowOverlap}></View>
            </View>
          )}
        </View>
      );
    };
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          inverted
          data={messagesList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "column-reverse",
            paddingBottom: Sizes.fixPadding * 2.0,
            paddingTop: Sizes.fixPadding * 2.0,
          }}
          style={{ backgroundColor: "white" }}
        />
      </View>
    );
  }

  function addMessage({ message }) {
    const oldMessages = messagesList;

    let date = Date();
    let hour = new Date(date).getHours();
    let minute = new Date(date).getMinutes();
    let AmPm = hour >= 12 ? "pm" : "am";
    let finalhour = hour > 12 ? hour - 12 : hour;
    let displayHour =
      finalhour.toString().length == 1 ? `0${finalhour}` : finalhour;
    let displayMinute = minute.toString().length == 1 ? `0${minute}` : minute;

    const newMessage = {
      id: messagesList.length + 1,
      message: message,
      messageTime: `${displayHour}:${displayMinute} ${AmPm}`,
      isSender: true,
    };

    oldMessages.push(newMessage);
    setMessagesList(oldMessages);
  }

  function typeMessage() {
    const [message, setMessage] = useState("");
    return (
      <View style={styles.typeMessageWrapStyle}>
        <TextInput
          cursorColor={Colors.primaryColor}
          selectionColor={Colors.primaryColor}
          value={message}
          onChangeText={setMessage}
          placeholder="Write a message..."
          style={{
            flex: 1,
            ...Fonts.grayColor16Regular,
            marginRight: Sizes.fixPadding,
          }}
          placeholderTextColor={Colors.grayColor}
        />
        <MaterialIcons
          name="send"
          size={20}
          color={Colors.primaryColor}
          style={{ marginLeft: Sizes.fixPadding - 5.0 }}
          onPress={() => {
            if (message != "") {
              addMessage({ message: message });
              setMessage("");
            }
          }}
        />
      </View>
    );
  }
};

export default MessageScreen;

const styles = StyleSheet.create({
  headerWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: Sizes.fixPadding * 2.0,
  },
  typeMessageWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.extraLightGrayColor,
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding + 2.0,
    paddingVertical: Sizes.fixPadding + 3.0,
  },
  messageWrapStyle: {
    padding: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
    maxWidth: screenWidth - 90.0,
  },
  // Message bubble style
  rightArrow: {
    position: "absolute",
    backgroundColor: Colors.primaryColor,
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "white",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
  leftArrow: {
    position: "absolute",
    backgroundColor: Colors.mediumGrayColor,
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },
  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "white",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});
