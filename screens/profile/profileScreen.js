import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  LayoutAnimation,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import { Text } from "../../components/commonText";
import {
  Colors,
  Fonts,
  Sizes,
  screenWidth,
  fontFamily,
} from "../../constants/styles";
import AvatarView from "../../components/avatarView";

const bannerImageSize = screenWidth < 480 ? 430 : 450;
const bannerProfileImageSize = screenWidth < 480 ? 100 : 120;

const profileWebsites = [
  "https://github.com/michaelniemis",
  "https://linkedin.com/in/michaelniemis",
];

const skillsList = [
  require("../../assets/images/icons/react.png"),
  require("../../assets/images/icons/php.png"),
  require("../../assets/images/icons/c-sharp.png"),
];

const workExperiencesList = [
  {
    id: "1",
    serviceLogo: require("../../assets/images/jobs/job6.png"),
    post: "Sr. UI/UX Designer (Team Lead)",
    serviceProvider: "Infosys Technologies",
    experience: "2019 Dec - Present (2y, 4m)",
  },
  {
    id: "2",
    serviceLogo: require("../../assets/images/jobs/job5.png"),
    post: "Jr. UI/UX Designer",
    serviceProvider: "Android",
    experience: "2018 Aug - 2019 Dec  (1y, 6m)",
  },
];

const ProfileScreen = ({ navigation }) => {
  const [coverMenuVisible, setCoverMenuVisible] = useState(false);
  const [secondCoverMenuVisible, setSecondCoverMenuVisible] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [showProfilePicChangeSheet, setshowProfilePicChangeSheet] =
    useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {profileCover()}
          {profileSecondCover()}
          {profileBanner()}
          {contactInfo()}
          {divider()}
          {aboutInfo()}
          {divider()}
          {skillsInfo()}
          {divider()}
          {workExperienceInfo()}
          {divider()}
          {educationInfo()}
        </ScrollView>
      </View>
      {changeProfilePicSheet()}
    </View>
  );

  function profileCover() {
    const [rotateAnim] = useState(new Animated.Value(0));

    const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });

    const toggleMenu = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      if (coverMenuVisible) {
        setCoverMenuVisible(false);
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start();
      } else {
        setCoverMenuVisible(true);
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      }
    };

    return (
      <View style={styles.profileCoverContainer}>
        <View style={styles.profileCoverTitleContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: Colors.primaryColor,
                fontSize: 20,
                fontFamily: fontFamily.SemiBold,
              }}
            >
              User Pages -{" "}
            </Text>
            <Text
              style={{
                fontSize: 19,
                color: Colors.primaryColor,
                fontFamily: fontFamily.Light,
              }}
            >
              Profile Cover
            </Text>
          </View>
          <Pressable onPress={toggleMenu} style={styles.profileCoverDropdown}>
            <Animated.View style={{ transform: [{ rotate }] }}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={15}
                color={Colors.primaryColor}
                style={{ opacity: 0.7 }}
              />
            </Animated.View>
          </Pressable>
        </View>
        <View
          style={{
            height: coverMenuVisible ? 60 : 0,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          {coverMenuVisible && (
            <Pressable style={{ flexDirection: "row" }}>
              <AvatarView
                uri={require("../../assets/images/icons/tesla.jpg")}
                size={35}
              />
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    opacity: 0.85,
                    fontSize: 12,
                    fontFamily: fontFamily.Light,
                  }}
                >
                  Customer
                </Text>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 12,
                    fontFamily: fontFamily.SemiBold,
                  }}
                >
                  Tesla Motors Inc
                </Text>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    );
  }

  function profileSecondCover() {
    const [rotateAnim] = useState(new Animated.Value(0));

    const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });

    const toggleMenu = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      if (secondCoverMenuVisible) {
        setSecondCoverMenuVisible(false);
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start();
      } else {
        setSecondCoverMenuVisible(true);
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      }
    };

    return (
      <View>
        <View style={styles.profileSecondCoverTitleContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="home-outline"
              size={20}
              color={Colors.primaryColor}
            />
            <Text style={styles.profileSecondCoverRouteDevider}>/</Text>
            <Text
              style={[
                styles.profileSecondCoverRoute,
                {
                  color: Colors.primaryColor,
                  fontFamily: fontFamily.Medium,
                  opacity: 0.85,
                },
              ]}
            >
              User pages
            </Text>
            <Text style={styles.profileSecondCoverRouteDevider}>/</Text>
            <Text style={styles.profileSecondCoverRoute}>Profile cover</Text>
          </View>
          <Pressable onPress={toggleMenu} style={styles.profileCoverDropdown}>
            <Animated.View style={{ transform: [{ rotate }] }}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={15}
                color={Colors.primaryColor}
                style={{ opacity: 0.7 }}
              />
            </Animated.View>
          </Pressable>
        </View>
        <View
          style={{
            height: secondCoverMenuVisible ? 75 : 0,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          {secondCoverMenuVisible && (
            <View>
              <Pressable style={styles.secondCoverMenuItem}>
                <View style={{ width: 30 }}>
                  <Feather
                    name="life-buoy"
                    size={20}
                    color={Colors.primaryColor}
                    style={{ opacity: 0.85 }}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 14,
                    fontFamily: fontFamily.Medium,
                    opacity: 0.85,
                  }}
                >
                  Support
                </Text>
              </Pressable>
              <Pressable
                style={[styles.secondCoverMenuItem, { marginBottom: 10 }]}
              >
                <View style={{ width: 30 }}>
                  <AntDesign
                    name="setting"
                    size={20}
                    color={Colors.primaryColor}
                    style={{ opacity: 0.85 }}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 14,
                    fontFamily: fontFamily.Medium,
                    opacity: 0.85,
                  }}
                >
                  Settings
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    );
  }

  function profileBanner() {
    return (
      <ImageBackground
        source={require("../../assets/images/users/profile_banner.jpg")}
        style={{
          width: screenWidth,
          height: bannerImageSize,
          marginBottom: Sizes.fixPadding,
        }}
        resizeMode="cover"
      >
        <View style={styles.outerRing}>
          <Image
            source={require("../../assets/images/avatars/1.jpg")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.role}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              color: "white",
              fontWeight: 600,
              fontFamily: fontFamily.SemiBold,
              textShadowColor: "#00000080",
              textShadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
              textShadowRadius: 5, // Shadow radius for iOS
            }}
          >
            Hanna Dorman
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "white",
              fontFamily: fontFamily.Medium,
              marginTop: 3,
              textShadowColor: "#00000080",
              textShadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
              textShadowRadius: 5, // Shadow radius for iOS
            }}
          >
            UX/UI designer
          </Text>
        </View>
        <View style={styles.profileBannerActionContainer}>
          <Pressable style={styles.profileBannerAction}>
            <Ionicons
              name="image-outline"
              size={20}
              color={Colors.primaryColor}
              style={{ opacity: 0.9 }}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontFamily: fontFamily.Light,
              }}
            >
              Cover image
            </Text>
          </Pressable>
          <Pressable
            activeOpacity={0.7}
            style={[styles.profileBannerAction, { marginLeft: 20 }]}
          >
            <MaterialCommunityIcons
              name="chart-line"
              size={20}
              color={Colors.primaryColor}
              style={{ opacity: 0.9 }}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontFamily: fontFamily.Light,
              }}
            >
              Statistics
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
  }

  function changeProfilePicSheet() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showProfilePicChangeSheet}
        onRequestClose={() => {
          setshowProfilePicChangeSheet(false);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setshowProfilePicChangeSheet(false);
          }}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {}}
              style={{ backgroundColor: Colors.whiteColor }}
            >
              <View
                style={{
                  backgroundColor: Colors.whiteColor,
                  paddingVertical: Sizes.fixPadding * 2.0,
                }}
              >
                <Text style={styles.sheetHeaderStyle}>
                  Change Profile Photo
                </Text>
                <View style={styles.sheetDivider} />
                <Text
                  onPress={() => {
                    setshowProfilePicChangeSheet(false);
                  }}
                  style={{ ...Fonts.redColor16Regular, textAlign: "center" }}
                >
                  Remove Current Photo
                </Text>
                <View style={styles.sheetDivider} />
                <Text
                  onPress={() => {
                    setshowProfilePicChangeSheet(false);
                  }}
                  style={{ ...Fonts.blackColor16Regular, textAlign: "center" }}
                >
                  Take Photo
                </Text>
                <View style={styles.sheetDivider} />
                <Text
                  onPress={() => {
                    setshowProfilePicChangeSheet(false);
                  }}
                  style={{ ...Fonts.blackColor16Regular, textAlign: "center" }}
                >
                  Choose From Library
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function educationInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}
      >
        <View
          style={{
            ...styles.rowSpaceBetween,
            marginBottom: Sizes.fixPadding + 2.0,
          }}
        >
          <Text style={{ ...Fonts.blackColor19SemiBold }}>Education</Text>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={20}
            color={Colors.greenColor}
            onPress={() => {
              navigation.push("EditEducation");
            }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/university1.png")}
            style={styles.universityImageStyle}
          />
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
            <Text style={{ ...Fonts.blackColor17SemiBold }}>
              The University of Sydney
            </Text>
            <Text
              style={{
                ...Fonts.grayColor15Regular,
                marginTop: Sizes.fixPadding - 7.0,
              }}
            >
              Master of Computer Science
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function workExperienceInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <View style={{ ...styles.rowSpaceBetween }}>
          <Text style={{ ...Fonts.blackColor19SemiBold }}>Work Experience</Text>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={20}
            color={Colors.greenColor}
            onPress={() => {
              navigation.push("EditExperience");
            }}
          />
        </View>
        {workExperiencesList.map((item) => (
          <View
            key={`${item.id}`}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: Sizes.fixPadding * 1.5,
            }}
          >
            <Image source={item.serviceLogo} style={styles.sourceLogoStyle} />
            <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
              <Text numberOfLines={1} style={{ ...Fonts.blackColor17SemiBold }}>
                {item.post}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.grayColor15Regular,
                  marginVertical: Sizes.fixPadding - 7.0,
                }}
              >
                {item.serviceProvider}
              </Text>
              <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                {item.experience}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }

  function skillsInfo() {
    const renderItem = ({ item }) => (
      <Image source={item} style={styles.skillsPltImage} />
    );
    return (
      <View>
        <View
          style={{
            ...styles.rowSpaceBetween,
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginBottom: Sizes.fixPadding + 2.0,
          }}
        >
          <Text style={{ ...Fonts.blackColor19SemiBold }}>Skills</Text>
          <Feather
            name="plus-square"
            size={20}
            color={Colors.greenColor}
            onPress={() => {
              navigation.push("AddSkills");
            }}
          />
        </View>
        <FlatList
          horizontal
          data={skillsList}
          keyExtractor={(index) => `${index}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
        />
      </View>
    );
  }

  function aboutInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <View style={{ ...styles.rowSpaceBetween }}>
          <Text style={{ ...Fonts.blackColor19SemiBold }}>About Me</Text>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={20}
            color={Colors.greenColor}
            onPress={() => navigation.push("EditAbout")}
          />
        </View>
        <View style={{ marginVertical: Sizes.fixPadding + 2.0 }}>
          <Text
            numberOfLines={readMore ? 0 : 3}
            style={{ ...Fonts.grayColor15Regular }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit
            ullamcorper quisque eu sollicitudin rhoncus non augue. Sit magna vel
            magna rhoncus Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Amet sit ullamcorper quisque eu sollicitudin rhoncus non
            augue. Sit magna vel magna rhoncus
          </Text>
          <Text
            onPress={() => setReadMore(!readMore)}
            style={{
              ...Fonts.primaryColor16Medium,
              textAlign: "right",
              alignSelf: "flex-end",
            }}
          >
            {readMore ? "Show less..." : "Read more..."}
          </Text>
        </View>
        <View style={{ ...styles.rowSpaceBetween }}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="business-center"
              size={18}
              color={Colors.grayColor}
            />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.grayColor15Medium,
                flex: 1,
                marginHorizontal: Sizes.fixPadding - 5.0,
              }}
            >
              4+ years experience
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="location-pin"
              size={17}
              color={Colors.grayColor}
            />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.grayColor15Medium,
                flex: 1,
                marginLeft: Sizes.fixPadding - 5.0,
              }}
            >
              Sydney, Australia
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function divider() {
    return (
      <View
        style={{
          backgroundColor: Colors.lightGrayColor,
          height: 1.0,
          margin: Sizes.fixPadding * 2.0,
        }}
      />
    );
  }

  function contactInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <View
          style={{
            ...styles.rowSpaceBetween,
            marginBottom: Sizes.fixPadding,
          }}
        >
          <Text style={{ ...Fonts.blackColor19SemiBold, flex: 1 }}>
            Contact Information
          </Text>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={20}
            color={Colors.greenColor}
            onPress={() => {
              navigation.push("EditContactInfo");
            }}
          />
        </View>
        <View>
          <Text style={{ ...Fonts.blackColor15Medium }}>Email Address</Text>
          <Text
            style={{
              ...Fonts.grayColor15Regular,
              marginTop: Sizes.fixPadding - 7.0,
            }}
          >
            michaelniemis@gmail.com
          </Text>
        </View>
        <View style={{ marginVertical: Sizes.fixPadding + 2.0 }}>
          <Text style={{ ...Fonts.blackColor15Medium }}>Mobile Number</Text>
          <Text
            style={{
              ...Fonts.grayColor15Regular,
              marginTop: Sizes.fixPadding - 7.0,
            }}
          >
            +1 (386) 868-3720
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              ...Fonts.blackColor15Medium,
              marginBottom: Sizes.fixPadding - 8.0,
            }}
          >
            Website
          </Text>
          {profileWebsites.map((item, index) => (
            <Text
              key={`${index}`}
              style={{
                ...Fonts.blueColor15Regular,
                marginTop: Sizes.fixPadding - 7.0,
              }}
            >
              {item}
            </Text>
          ))}
        </View>
      </View>
    );
  }

  function profileImage() {
    return (
      <ImageBackground
        source={require("../../assets/images/users/user1.jpg")}
        style={{
          width: screenWidth,
          height: screenWidth - 120,
          marginBottom: Sizes.fixPadding * 3.5,
        }}
        resizeMode="cover"
      >
        <View style={styles.prifileImageOverlay}>
          <View style={styles.rowSpaceBetween}>
            <Text style={{ ...Fonts.whiteColor20Bold }}>Profile</Text>
            <Ionicons
              name="settings-outline"
              size={22}
              color={Colors.whiteColor}
              onPress={() => {
                navigation.push("Settings");
              }}
            />
          </View>
          <View>
            <Text style={{ ...Fonts.whiteColor19SemiBold }}>
              Michael Niemis
            </Text>
            <Text
              style={{
                ...Fonts.whiteColor16Medium,
                marginTop: Sizes.fixPadding - 8.0,
              }}
            >
              Sr. Software Engineer
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setshowProfilePicChangeSheet(true);
          }}
          style={styles.changeProfileIconWrapStyle}
        >
          <Ionicons name="camera" size={15} color={Colors.whiteColor} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  sheetHeaderStyle: {
    ...Fonts.blackColor20Bold,
    textAlign: "center",
    marginBottom: Sizes.fixPadding - 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  sheetDivider: {
    backgroundColor: Colors.lightGrayColor,
    height: 1.0,
    marginVertical: Sizes.fixPadding + 5.0,
  },
  universityImageStyle: {
    width: 50.0,
    height: 55.0,
    borderRadius: 10.0,
    overflow: "hidden",
  },
  sourceLogoStyle: {
    width: screenWidth / 6.0,
    height: 65.0,
    resizeMode: "contain",
    borderRadius: Sizes.fixPadding,
    overflow: "hidden",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prifileImageOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    padding: Sizes.fixPadding * 2.0,
  },
  changeProfileIconWrapStyle: {
    width: 36.0,
    height: 36.0,
    borderRadius: 18.0,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.whiteColor,
    borderWidth: 3.0,
    position: "absolute",
    bottom: -18.0,
    right: 20.0,
    zIndex: 1,
  },
  skillsPltImage: {
    width: 36.0,
    height: 36.0,
    resizeMode: "contain",
    marginHorizontal: Sizes.fixPadding,
  },
  outerRing: {
    width: bannerProfileImageSize + 10, // Adjust size as needed
    height: bannerProfileImageSize + 10,
    borderRadius: (bannerProfileImageSize + 13) / 2, // Half of the width/height to make it circular
    backgroundColor: "#f1f4f9", // Color of the ring
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.8, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 5, // Elevation for Android
    position: "absolute",
    top: (bannerImageSize - bannerProfileImageSize) / 2,
    left: (screenWidth - bannerProfileImageSize) / 2,
  },
  avatar: {
    width: bannerProfileImageSize, // Adjust size as needed
    height: bannerProfileImageSize,
    borderRadius: bannerProfileImageSize / 2, // Half of the width/height to make it circular
  },
  role: {
    position: "absolute",
    top: bannerImageSize / 2 + bannerProfileImageSize / 2 + 30,
    width: "100%",
    alignItems: "center",
    height: 60,
  },
  profileBannerActionContainer: {
    position: "absolute",
    top: bannerImageSize / 2 + bannerProfileImageSize / 2 + 30 + 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
  },
  profileBannerAction: {
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.8, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 5, // Elevation for Android
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  secondCoverMenuItem: {
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
  },
  profileCoverContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  profileCoverTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: "center",
  },
  profileCoverDropdown: {
    padding: 6,
    borderRadius: 30,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
  },
  profileSecondCoverTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  profileSecondCoverRouteDevider: {
    marginLeft: 8,
    fontSize: 14,
    color: "#5c6c83",
  },
  profileSecondCoverRoute: {
    marginLeft: 8,
    color: "#6b7280",
    fontSize: 14,
    fontFamily: fontFamily.Medium,
  },
});
