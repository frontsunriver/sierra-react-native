import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { Colors, Fonts, Sizes, screenWidth } from "../constants/styles";
import AvatarView from "./avatarView";

// Enable LayoutAnimation on Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: {
        profilePhoto: require("../assets/images/avatars/1.jpg"),
        fullName: "Luis Daniel",
        isOnline: false,
      },
      lastMessage:
        "For the profile pic icon, I need the dropdown. For placement as per below and leave the same text and icons you see in the dropdown",
      time: "18:30",
      read: false,
    },
    {
      id: 2,
      sender: {
        profilePhoto: require("../assets/images/avatars/1.jpg"),
        fullName: "James walter",
        isOnline: true,
      },
      lastMessage:
        "For the profile pic icon, I need the dropdown. For placement as per below and leave the same text and icons you see in the dropdown",
      time: "03:10",
      read: true,
    },
    {
      id: 3,
      sender: {
        profilePhoto: require("../assets/images/avatars/1.jpg"),
        fullName: "Olagviel Gabriel",
        isOnline: false,
      },
      lastMessage:
        "For the profile pic icon, I need the dropdown. For placement as per below and leave the same text and icons you see in the dropdown",
      time: "10:00",
      read: true,
    },
    {
      id: 4,
      sender: {
        profilePhoto: require("../assets/images/avatars/1.jpg"),
        fullName: "Branislav Karan",
        isOnline: true,
      },
      lastMessage:
        "For the profile pic icon, I need the dropdown. For placement as per below and leave the same text and icons you see in the dropdown",
      time: "15:20",
      read: false,
    },
  ]);

  const toggleSearchBar = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleSearchBar(!visibleSearchBar);
  };

  const BadgeView = ({ count }) => {
    return (
      <View style={styles.badgeIndicator}>
        <Text>{count}</Text>
      </View>
    );
  };

  function searchField() {
    return (
      <View
        style={{
          height: visibleSearchBar ? 50 : 0,
          opacity: visibleSearchBar ? 1 : 0,
        }}
      >
        <View style={styles.searchFieldWrapper}>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"#909092"}
            style={styles.searchFieldStyle}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
          <TouchableOpacity>
            <MaterialIcons
              name="filter-list"
              color={Colors.whiteColor}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function messagePan() {
    function renderItem({ item }) {
      return (
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}
        >
          <AvatarView
            uri={item.sender.profilePhoto}
            size={50}
            online={item.sender.isOnline}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item.sender.fullName}</Text>
            <Text numberOfLines={2} style={{ lineHeight: 20, marginTop: 5 }}>
              {item.lastMessage}
            </Text>
          </View>
          <Text>{item.time}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.panelContainer}>
        <View style={styles.panelTitleContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Messages</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <MaterialIcons name="filter-list" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <AntDesign name="search1" size={23} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          data={messages}
          showsVerticalScrollIndicator={true}
          style={styles.panelContentContainer}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "gray",
            bottom: 0,
            left: 0,
            width: screenWidth - 50,
            height: 60,
          }}
        ></View>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "#252b36",
        paddingBottom: visibleSearchBar ? 10 : 0,
        position: "relative",
      }}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerMenu}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
        <View style={styles.headerActionContainer}>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleSearchBar}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="message-square" size={24} color="white" />
            <BadgeView count={5} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.headerAvatar}>
            <AvatarView
              uri={require("../assets/images/avatars/1.jpg")}
              size={50}
              online={true}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchField()}
      {messagePan()}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerMenu: {
    paddingVertical: 15,
  },
  headerTitle: {
    marginLeft: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerActionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    paddingHorizontal: 8,
  },
  headerAvatar: {
    paddingVertical: 15,
    marginLeft: 20,
  },
  badgeIndicator: {
    position: "absolute",
    top: -18,
    right: -10,
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: "orange",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  searchFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  searchFieldStyle: {
    ...Fonts.whiteColor16Medium,
    flex: 1,
    marginHorizontal: Sizes.fixPadding,
    includeFontPadding: false,
  },
  panelContainer: {
    position: "absolute",
    bottom: -350,
    left: 25,
    width: screenWidth - 50,
    height: 350,
    backgroundColor: "white",
    zIndex: 1000,
    borderRadius: 10,
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.8, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 5, // Elevation for Android,
    paddingVertical: 15,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  panelTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  panelContentContainer: {
    marginTop: 20,
  },
});

export default CustomHeader;
