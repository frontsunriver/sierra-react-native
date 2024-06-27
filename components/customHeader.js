import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
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

  return (
    <View
      style={{
        backgroundColor: "#252b36",
        paddingBottom: visibleSearchBar ? 10 : 0,
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
            <AntDesign name="appstore-o" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="message-square" size={24} color="white" />
            <BadgeView count={5} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            <BadgeView count={5} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.headerAvatar}>
            <AvatarView
              uri="https://randomuser.me/api/portraits/men/1.jpg"
              size={50}
              online={true}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchField()}
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
    marginLeft: 12,
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
});

export default CustomHeader;
