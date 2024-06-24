import React from "react";
import { Image, StyleSheet, View } from "react-native";

const AvatarView = ({ uri, size = 50, online = false }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={{ uri }}
        style={[
          styles.avatar,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
      {online && (
        <View
          style={[
            styles.onlineIndicator,
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
  onlineIndicator: {
    position: "absolute",
    bottom: 3,
    right: 3,
    backgroundColor: "#4caf50", // Green color for online status
    borderWidth: 2,
    borderColor: "#ffffff",
  },
});

export default AvatarView;
