import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/profile/profileScreen";
import BottomTabBarScreen from "./bottomTabBarScreen";
import CustomHeader from "./customHeader";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="BottomTabs">
      <Drawer.Screen
        name="BottomTabs"
        options={{
          title: "Home",
          header: () => <CustomHeader title="Welcome" />,
        }}
        component={BottomTabBarScreen}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
