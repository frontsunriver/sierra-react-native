import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import ProfileScreen from "../screens/profile/profileScreen";
import BottomTabBarScreen from "./bottomTabBarScreen";
import CustomHeader from "./customHeader";
import MyStatusBar from "./myStatusBar";
import { View } from "react-native";

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = ({ route, rightDrawerContext }) => {
  const { openRightDrawer } = React.useContext(rightDrawerContext);

  const [shouldClosePanel, setShouldClosePanel] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <LeftDrawer.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{ drawerPosition: "left" }}
      >
        <LeftDrawer.Screen
          name="BottomTabs"
          options={{
            title: "Home",
            header: (props) => (
              <CustomHeader
                {...props}
                title="Welcome"
                shouldClosePanel={shouldClosePanel}
                setShouldClosePanel={setShouldClosePanel}
              />
            ),
          }}
        >
          {(props) => (
            <BottomTabBarScreen
              {...props}
              route={route}
              setShouldClosePanel={setShouldClosePanel}
              openRightDrawer={openRightDrawer}
            />
          )}
        </LeftDrawer.Screen>
        <LeftDrawer.Screen name="Profile" component={ProfileScreen} />
      </LeftDrawer.Navigator>
    </View>
  );
};

export default LeftDrawerScreen;
