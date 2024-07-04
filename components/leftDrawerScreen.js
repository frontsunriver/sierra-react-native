import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import ProfileScreen from "../screens/profile/profileScreen";
import BottomTabBarScreen from "./bottomTabBarScreen";
import CustomHeader from "./customHeader";

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = ({ rightDrawerContext }) => {
  const { openRightDrawer } = React.useContext(rightDrawerContext);

  const [shouldClosePanel, setShouldClosePanel] = useState(false);

  return (
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
            setShouldClosePanel={setShouldClosePanel}
            openRightDrawer={openRightDrawer}
          />
        )}
      </LeftDrawer.Screen>
      <LeftDrawer.Screen name="Profile" component={ProfileScreen} />
    </LeftDrawer.Navigator>
  );
};

export default LeftDrawerScreen;
