import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AvatarView from "./avatarView";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerMenu}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>
      <View style={{ flex: 1 }}></View>
      <View style={styles.headerActionContainer}>
        <TouchableOpacity style={styles.headerIcon}>
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
  );
};

const BadgeView = ({ count }) => {
  return (
    <View style={styles.badgeIndicator}>
      <Text>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252b36",
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
});

export default CustomHeader;
