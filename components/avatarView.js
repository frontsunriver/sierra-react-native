import React from "react";
import { Image, StyleSheet, View } from "react-native";

const AvatarView = ({ uri, size = 50, online = false }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={uri}
        style={[
          styles.avatar,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
      {online ? (
        <View
          style={[
            styles.statusIndicator,
            styles.online,
            { width: size / 4, height: size / 4, borderRadius: size / 8 },
          ]}
        />
      ) : (
        <View
          style={[
            styles.statusIndicator,
            styles.offline,
            { width: size / 4, height: size / 4, borderRadius: size / 8 },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  statusIndicator: {
    position: "absolute",
    bottom: 3,
    right: 3,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  online: {
    backgroundColor: "#4caf50", // Green color for online status
  },
  offline: {
    backgroundColor: "gray", // Green color for online status
  },
  busy: {
    backgroundColor: "orange", // Green color for online status
  },
});

export default AvatarView;