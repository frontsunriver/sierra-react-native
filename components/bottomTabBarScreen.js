import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import {
  BackHandler,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import BusinessHomeScreen from "../screens/business/home/businessHomeScreen";
import ChatScreen from "../screens/chat/chatScreen";
import HomeScreen from "../screens/home/homeScreen";
import ProfileScreen from "../screens/profile/profileScreen";
import SavedScreen from "../screens/saved/savedScreen";

const Tab = createBottomTabNavigator();

const BottomTabBarScreen = ({
  navigation,
  setShouldClosePanel,
  openRightDrawer,
}) => {
  const defaultScreenProps = {
    setShouldClosePanel,
  };

  const backAction = () => {
    if (Platform.OS === "ios") {
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      });
    } else {
      backClickCount == 1 ? BackHandler.exitApp() : _spring();
      return true;
    }
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      navigation.addListener("gestureEnd", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
        navigation.removeListener("gestureEnd", backAction);
      };
    }, [backAction])
  );

  function _spring() {
    setBackClickCount(1);
    setTimeout(() => {
      setBackClickCount(0);
    }, 1000);
  }

  const [backClickCount, setBackClickCount] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightGrayColor,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.whiteColor,
            height: 60.0,
          },
          tabBarItemStyle: { height: 60 },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-variant"
                size={24}
                color={color}
              />
            ),
          }}
        >
          {(props) => <HomeScreen {...props} {...defaultScreenProps} />}
        </Tab.Screen>
        <Tab.Screen
          name="BusinessHome"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="business" size={22} color={color} />
            ),
          }}
        >
          {(props) => <BusinessHomeScreen {...props} {...defaultScreenProps} />}
        </Tab.Screen>
        <Tab.Screen
          name="Saved"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" size={24} color={color} />
            ),
          }}
        >
          {(props) => <SavedScreen {...props} {...defaultScreenProps} />}
        </Tab.Screen>
        <Tab.Screen
          name="Chat"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble-ellipses" size={22} color={color} />
            ),
          }}
        >
          {(props) => <ChatScreen {...props} {...defaultScreenProps} />}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        >
          {(props) => <ProfileScreen {...props} {...defaultScreenProps} />}
        </Tab.Screen>
      </Tab.Navigator>
      {setting()}
      {exitInfo()}
    </View>
  );

  function setting() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.setting}
        onPress={openRightDrawer}
      >
        <AntDesign name="setting" size={24} color="white" />
      </TouchableOpacity>
    );
  }

  function exitInfo() {
    return backClickCount == 1 ? (
      <View style={styles.exitInfoWrapStyle}>
        <Text style={{ ...Fonts.whiteColor14Medium }}>
          Press Back Once Again To Exit!
        </Text>
      </View>
    ) : null;
  }
};

export default BottomTabBarScreen;

const styles = StyleSheet.create({
  exitInfoWrapStyle: {
    backgroundColor: Colors.grayColor,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    borderRadius: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding,
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    position: "absolute",
    top: "50%",
    marginTop: -80,
    right: 0,
    padding: 8,
    backgroundColor: "#0c83ff",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    zIndex: 999,
  },
});
