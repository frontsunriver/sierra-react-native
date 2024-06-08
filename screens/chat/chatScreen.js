import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "../../components/commonText";
import { Colors, Fonts, Sizes } from "../../constants/styles";

const chatsList = [
  {
    id: "1",
    sourceImage: require("../../assets/images/avatars/1.jpg"),
    sourceName: "PIEXEC",
    lastMsg: "Hello, Michael",
    lastMsgTime: "8:00 am",
    unreadMsgCount: 2,
  },
  {
    id: "2",
    sourceImage: require("../../assets/images/avatars/2.jpg"),
    sourceName: "Linkdin",
    lastMsg: "Nice to meet you",
    lastMsgTime: "9:00 am",
  },
  {
    id: "3",
    sourceImage: require("../../assets/images/avatars/3.jpg"),
    sourceName: "Upwork",
    lastMsg: "Agreed",
    lastMsgTime: "10:00 am",
  },
  {
    id: "4",
    sourceImage: require("../../assets/images/avatars/4.jpg"),
    sourceName: "Robotflow",
    lastMsg: "Yeah!, Let's continue",
    lastMsgTime: "Yesterday",
  },
  {
    id: "5",
    sourceImage: require("../../assets/images/avatars/5.jpg"),
    sourceName: "X",
    lastMsg: "Welcome!",
    lastMsgTime: "2 days ago",
  },
  {
    id: "6",
    sourceImage: require("../../assets/images/avatars/6.jpg"),
    sourceName: "Freelancer",
    lastMsg: "Will send job detail through email",
    lastMsgTime: "3 days ago",
  },
  {
    id: "7",
    sourceImage: require("../../assets/images/avatars/7.jpg"),
    sourceName: "Google",
    lastMsg: "Let's discuss about competition",
    lastMsgTime: "A week ago",
  },
];

const ChatScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <View style={{ flex: 1 }}>
        {header()}
        {searchField()}
        {chatsInfo()}
      </View>
    </View>
  );

  function chatsInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.push("Message");
        }}
        style={styles.chatInfoWrapStyle}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image source={item.sourceImage} style={styles.sourceImageStyle} />
          <View
            style={{
              flex: 1,
              marginLeft: Sizes.fixPadding + 5.0,
              marginRight: Sizes.fixPadding,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.blackColor18SemiBold,
                marginBottom: Sizes.fixPadding - 5.0,
              }}
            >
              {item.sourceName}
            </Text>
            <Text
              numberOfLines={1}
              style={
                item.unreadMsgCount
                  ? { ...Fonts.blackColor15Regular }
                  : { ...Fonts.grayColor15Regular }
              }
            >
              {item.lastMsg}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ ...Fonts.grayColor14Regular }}>
            {item.lastMsgTime}
          </Text>
          {item.unreadMsgCount ? (
            <View style={styles.unreadMsgCountWrapper}>
              <Text style={{ ...Fonts.whiteColor14Medium }}>
                {item.unreadMsgCount}
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={chatsList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{ paddingTop: Sizes.fixPadding * 1.4 }}
      />
    );
  }

  function searchField() {
    return (
      <View style={styles.searchFieldWrapper}>
        <MaterialIcons name="search" color={Colors.grayColor} size={20} />
        <TextInput
          placeholder="Search Here"
          placeholderTextColor={Colors.grayColor}
          style={styles.searchFieldStyle}
          cursorColor={Colors.primaryColor}
          selectionColor={Colors.primaryColor}
        />
      </View>
    );
  }

  function header() {
    return (
      <Text
        style={{
          ...Fonts.blackColor20Bold,
          textAlign: "center",
          margin: Sizes.fixPadding * 2.0,
        }}
      >
        Chats
      </Text>
    );
  }
};

export default ChatScreen;

const styles = StyleSheet.create({
  searchFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.extraLightGrayColor,
    padding: Sizes.fixPadding + 2.0,
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginTop: Sizes.fixPadding - 5.0,
    marginBottom: Sizes.fixPadding,
  },
  searchFieldStyle: {
    ...Fonts.grayColor16Regular,
    flex: 1,
    marginHorizontal: Sizes.fixPadding,
    includeFontPadding: false,
  },
  unreadMsgCountWrapper: {
    width: 24.0,
    height: 24.0,
    borderRadius: 12.0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
    overflow: "hidden",
    marginTop: Sizes.fixPadding - 5.0,
  },
  sourceImageStyle: {
    width: 50.0,
    height: 50.0,
    borderRadius: 25.0,
    resizeMode: "contain",
  },
  chatInfoWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.4,
  },
});
