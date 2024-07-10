import { EvilIcons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, fontFamily } from "../constants/styles";
import LeftDrawerScreen from "./leftDrawerScreen";
import MyStatusBar from "./myStatusBar";

const RightDrawerContext = React.createContext();

const RightDrawerScreen = () => {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      openRightDrawer: () => setRightDrawerOpen(true),
      closeRightDrawer: () => setRightDrawerOpen(false),
    }),
    []
  );

  function RightDrawerContent() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Demo configuration</Text>
          <TouchableOpacity onPress={() => setRightDrawerOpen(false)}>
            <EvilIcons name="close" size={24} color={Colors.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => <RightDrawerContent />}
    >
      <RightDrawerContext.Provider value={value}>
        <LeftDrawerScreen rightDrawerContext={RightDrawerContext} />
      </RightDrawerContext.Provider>
    </Drawer>
  );
};

export default RightDrawerScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fontFamily.Bold,
    color: Colors.primaryColor,
  },
});
