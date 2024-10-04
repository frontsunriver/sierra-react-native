import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
import PaginationDot from "react-native-animated-pagination-dot";
import {
  Colors,
  Fonts,
  Sizes,
  fontFamily,
  screenWidth,
} from "../constants/styles";
import AvatarView from "./avatarView";

// Enable LayoutAnimation on Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomHeader = ({ title, shouldClosePanel, setShouldClosePanel }) => {
  const navigation = useNavigation();

  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [showMessagePan, setShowMessagePan] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: {
        profilePhoto: require("../assets/images/avatars/1.jpg"),
        fullName: "Luis Daniel",
        status: "offline",
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
        status: "online",
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
        status: "busy",
      },
      lastMessage:
        "For the profile pic icon, I need the dropdown. For placement as per below and leave the same text and icons you see in the dropdown",
      time: "10:00",
      read: true,
    },
  ]);
  const [currentMsgPage, setCurrentMsgPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    if (shouldClosePanel) {
      if (visibleDropdown) {
        setVisibleDropdown(false);
      }
      setShouldClosePanel(false);
    }
  }, [shouldClosePanel]);

  const toggleSearchBar = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleSearchBar(!visibleSearchBar);
  };

  const toggleMessagePanel = () => {
    if (visibleDropdown && showProfileMenu) {
      setShowProfileMenu(false);
      setShowMessagePan(true);
    } else {
      setVisibleDropdown(!visibleDropdown);
      setShowProfileMenu(false);
      setShowMessagePan(true);
    }
  };

  const toggleProfileMenu = () => {
    if (visibleDropdown && showMessagePan) {
      setShowProfileMenu(true);
      setShowMessagePan(false);
    } else {
      setVisibleDropdown(!visibleDropdown);
      setShowProfileMenu(true);
      setShowMessagePan(false);
    }
  };

  const BadgeView = ({ count }) => {
    return (
      <View style={styles.badgeIndicator}>
        <Text style={{...Fonts.blackColor11Regular}}>{count}</Text>
      </View>
    );
  };

  function searchField() {
    return (
      <View
        style={{
          height: visibleSearchBar ? 30 : 0,
          opacity: visibleSearchBar ? 1 : 0,
        }}
      >
        <View style={styles.searchFieldWrapper}>
          <TouchableOpacity>
            <AntDesign name="search1" size={1} color="white" />
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
              size={15}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function dropdownPanel() {
    function renderItem({ item }) {
      return (
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row", marginVertical: 7 }}
        >
          <AvatarView
            uri={item.sender.profilePhoto}
            size={50}
            status={item.sender.status}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              style={{
                fontFamily: fontFamily.SemiBold,
                color: Colors.primaryColor,
                fontSize: 14,
              }}
            >
              {item.sender.fullName}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                lineHeight: 20,
                marginTop: 5,
                color: Colors.primaryColor,
                opacity: 0.7,
                fontFamily: fontFamily.Medium,
                fontSize: 13,
              }}
            >
              {item.lastMessage}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fontFamily.Light,
              color: Colors.primaryColor,
              opacity: 0.8,
              fontSize: 13,
            }}
          >
            {item.time}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View
        style={[
          styles.panelContainer,
          showMessagePan && styles.panelMessage,
          showProfileMenu && styles.panelProfileMenu,
        ]}
        pointerEvents="box-none"
      >
        {showMessagePan && (
          <>
            <View style={styles.panelTitleContainer}>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.primaryColor,
                  fontFamily: fontFamily.SemiBold,
                }}
              >
                Messages
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                  <AntDesign
                    name="search1"
                    size={23}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              keyExtractor={(item) => `${item.id}`}
              renderItem={renderItem}
              data={messages}
              showsVerticalScrollIndicator={false}
              style={styles.panelContentContainer}
            />
            <View style={styles.panelPaginationContainer}>
              <TouchableOpacity
                disabled={currentMsgPage == 0}
                onPress={() => setCurrentMsgPage(currentMsgPage - 1)}
              >
                <MaterialIcons
                  name="arrow-back-ios"
                  size={20}
                  color={currentMsgPage == 0 ? "#ddd" : Colors.primaryColor}
                  style={{ opacity: 0.9 }}
                />
              </TouchableOpacity>
              <PaginationDot
                activeDotColor={Colors.primaryColor}
                curPage={currentMsgPage}
                maxPage={pageSize}
              />
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                disabled={currentMsgPage == pageSize - 1}
                onPress={() => setCurrentMsgPage(currentMsgPage + 1)}
              >
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={
                    currentMsgPage == pageSize - 1 ? "#ddd" : Colors.primaryColor
                  }
                  style={{ opacity: 0.9 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.panelFooterContainer}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="check-all"
                  size={24}
                  color={Colors.primaryColor}
                  style={{ opacity: 0.9 }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color: Colors.primaryColor,
                    fontFamily: fontFamily.Medium,
                  }}
                >
                  Dismiss all
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontFamily: fontFamily.Medium,
                  }}
                >
                  View all
                </Text>
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={24}
                  color={Colors.primaryColor}
                  style={{ marginLeft: 10, opacity: 0.9 }}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        {showProfileMenu && (
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.panelProfileMenuItem}>
              <View style={{ width: 30 }}>
                <FontAwesome
                  name="user-circle-o"
                  size={26}
                  color={Colors.primaryColor}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: fontFamily.Medium,
                  color: Colors.primaryColor,
                  fontSize: 15,
                }}
              >
                My profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelProfileMenuItem}>
              <View
                style={{
                  width: 30,
                  paddingLeft: 5,
                }}
              >
                <FontAwesome name="dollar" size={26} color={Colors.primaryColor} />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: fontFamily.Medium,
                  color: Colors.primaryColor,
                  fontSize: 15,
                }}
              >
                My subscription
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelProfileMenuItem}>
              <View style={{ width: 30 }}>
                <AntDesign
                  name="shoppingcart"
                  size={26}
                  color={Colors.primaryColor}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: fontFamily.Medium,
                  color: Colors.primaryColor,
                  fontSize: 15,
                }}
              >
                My orders
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelProfileMenuItem}>
              <View style={{ width: 30 }}>
                <MaterialCommunityIcons
                  name="email-open-outline"
                  size={26}
                  color={Colors.primaryColor}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: fontFamily.Medium,
                  color: Colors.primaryColor,
                  fontSize: 15,
                }}
              >
                My inbox
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 1 }}></View>
                <View style={styles.messageBadge}>
                  <Text
                    style={{ color: "white", fontFamily: fontFamily.Medium }}
                  >
                    26
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.panelProfileMenuDevider}></View>
            <TouchableOpacity style={styles.panelProfileMenuItem}>
              <View style={{ width: 30 }}>
                <AntDesign name="setting" size={26} color={Colors.primaryColor} />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: fontFamily.Medium,
                  color: Colors.primaryColor,
                  fontSize: 15,
                }}
              >
                Account settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelProfileMenuItem}>
              <View style={{ width: 30 }}>
                <MaterialIcons
                  name="logout"
                  size={26}
                  color={Colors.primaryColor}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: fontFamily.Medium,
                  color: Colors.primaryColor,
                  fontSize: 15,
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: Colors.primaryColor,
        paddingBottom: visibleSearchBar ? 10 : 0,
        position: "relative",
      }}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerMenu}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={20} color="white" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
        <View style={styles.headerActionContainer}>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleSearchBar}>
            <AntDesign name="search1" size={15} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={toggleMessagePanel}
          >
            <Feather name="message-square" size={15} color="white" />
            <BadgeView count={5} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.headerAvatar}
            onPress={toggleProfileMenu}
          >
            <AvatarView
              uri={require("../assets/images/avatars/1.jpg")}
              size={30}
              status={"online"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchField()}
      {visibleDropdown && dropdownPanel()}
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
    top: -8,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 15,
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
    ...Fonts.whiteColor12Medium,
    flex: 1,
    marginHorizontal: Sizes.fixPadding,
    includeFontPadding: false,
  },
  panelContainer: {
    position: "absolute",
    left: 25,
    width: screenWidth - 50,
    backgroundColor: "white",
    zIndex: 10,
    borderRadius: 10,
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.8, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 5, // Elevation for Android,
    overflow: "hidden",
  },
  panelMessage: {
    bottom: -402,
    height: 400,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  panelProfileMenu: {
    bottom: -327,
    height: 325,
    paddingVertical: 15,
  },
  panelTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  panelContentContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
  panelPaginationContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    bottom: 50,
    left: 0,
    width: screenWidth - 50,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  panelFooterContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: screenWidth - 50,
    height: 50,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  panelProfileMenuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  panelProfileMenuDevider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  messageBadge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: "#0c83ff",
  },
});

export default CustomHeader;
