import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";
import ProfileScreen from "../screens/profile/profileScreen";
import BottomTabBarScreen from "./bottomTabBarScreen";
import CustomHeader from "./customHeader";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const [shouldClosePanel, setShouldClosePanel] = useState(false);

  return (
    <Drawer.Navigator initialRouteName="BottomTabs">
      <Drawer.Screen
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
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
