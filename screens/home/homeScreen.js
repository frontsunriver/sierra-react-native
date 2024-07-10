import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  LayoutAnimation,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  UIManager,
  View,
} from "react-native";
import { Snackbar } from "react-native-paper";
import AvatarView from "../../components/avatarView";
import {
  Colors,
  Fonts,
  Sizes,
  fontFamily,
  screenWidth,
} from "../../constants/styles";

// Enable LayoutAnimation on Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const jobsTypesList = [
  "All Job",
  "Full Stack Engineer",
  "Backend Engineer",
  "Frontend Engineer",
  "Project Lead",
  "Web Developer",
  "Mobile Developer",
  "Automation Tester",
  "Operation Manager",
];

const jobList = [
  {
    id: "1",
    sourceLogo: require("../../assets/images/jobs/job1.png"),
    jobType: "Backend Engineer",
    sourceName: "PIEXEX",
    city: "Fort worth, USA",
    jobTime: "Full time",
    amountPerMonth: 100,
    inBookmark: true,
  },
  {
    id: "2",
    sourceLogo: require("../../assets/images/jobs/job2.png"),
    jobType: "Senior Mobile Engineer",
    sourceName: "X",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 200,
    inBookmark: true,
  },
  {
    id: "3",
    sourceLogo: require("../../assets/images/jobs/job3.png"),
    jobType: "Joomla Developer",
    sourceName: "Microsoft Crop",
    city: "California, USA",
    jobTime: "Full time",
    amountPerMonth: 300,
    inBookmark: true,
  },
  {
    id: "4",
    sourceLogo: require("../../assets/images/jobs/job4.png"),
    jobType: "Operation Manager",
    sourceName: "Linkedin",
    city: "California, USA",
    jobTime: "Full time",
    amountPerMonth: 400,
    inBookmark: true,
  },
  {
    id: "5",
    sourceLogo: require("../../assets/images/jobs/job5.png"),
    jobType: "UI/UX Designer",
    sourceName: "Android",
    city: "California, USA",
    jobTime: "Full time",
    amountPerMonth: 500,
    inBookmark: false,
  },
  {
    id: "6",
    sourceLogo: require("../../assets/images/jobs/job6.png"),
    jobType: "Senior Mobile Engineer",
    sourceName: "Robotflow",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 600,
    inBookmark: false,
  },
  {
    id: "7",
    sourceLogo: require("../../assets/images/jobs/job7.png"),
    jobType: "Product Manager",
    sourceName: "Wipro",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 700,
    inBookmark: false,
  },
  {
    id: "8",
    sourceLogo: require("../../assets/images/jobs/job8.png"),
    jobType: "Java Backend Engineer",
    sourceName: "BlownUp",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 800,
    inBookmark: false,
  },
];

const bannerImageSize = screenWidth < 480 ? 430 : 450;
const bannerProfileImageSize = screenWidth < 480 ? 100 : 120;

const HomeScreen = ({ navigation, setShouldClosePanel }) => {
  const [selectedJobTypeIndex, setselectedJobTypeIndex] = useState(0);
  const [jobData, setjobData] = useState(jobList);
  const [showSnackBar, setshowSnackBar] = useState(false);
  const [snackBarMsg, setsnackBarMsg] = useState("");

  const [coverMenuVisible, setCoverMenuVisible] = useState(false);
  const [secondCoverMenuVisible, setSecondCoverMenuVisible] = useState(false);
  const [actionMenuVisible, setActionMenuVisible] = useState(false);

  const handleTouchStart = () => {
    setShouldClosePanel(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, zIndex: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          style={{ flex: 1, backgroundColor: Colors.whiteColor }}
          onPress={handleTouchStart}
          activeOpacity={1}
        >
          <View style={{ flex: 1 }}>
            {profileCover()}
            {profileSecondCover()}
            {profileBanner()}
            {actionBar()}
            {jobRecommendationTitle()}
            {jobTypesInfo()}
            {jobsAccordingSelection()}
          </View>
          {snackBarInfo()}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );

  function snackBarInfo() {
    return (
      <Snackbar
        visible={showSnackBar}
        elevation={0}
        onDismiss={() => setshowSnackBar(false)}
        style={styles.snackBarStyle}
      >
        <Text style={{ ...Fonts.whiteColor16Medium }}>{snackBarMsg}</Text>
      </Snackbar>
    );
  }

  function updateJobData({ id }) {
    const copyData = jobData;
    const updatedDatat = copyData.map((item) => {
      if (item.id === id) {
        setsnackBarMsg(
          item.inBookmark ? "Removed from Bookmark" : "Added to Bookmark"
        );
        setshowSnackBar(true);
        return { ...item, inBookmark: !item.inBookmark };
      } else {
        return item;
      }
    });
    setjobData(updatedDatat);
  }

  function jobsAccordingSelection() {
    const renderItem = ({ item }) => (
      <Pressable
        activeOpacity={0.7}
        onPress={() => {
          navigation.push("JobDetail");
        }}
        style={styles.jobWrapStyle}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image source={item.sourceLogo} style={styles.sourceLogoStyle} />
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
            <Text numberOfLines={1} style={{ ...Fonts.blackColor18SemiBold }}>
              {item.jobType}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.blackColor15Regular,
                marginBottom: Sizes.fixPadding - 8.0,
                marginTop: Sizes.fixPadding - 5.0,
              }}
            >
              {item.sourceName}
            </Text>
            <Text numberOfLines={1} style={{ ...Fonts.grayColor13Regular }}>
              {item.city} • {item.jobTime}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 65.0,
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => {
              updateJobData({ id: item.id });
            }}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name={item.inBookmark ? "bookmark" : "bookmark-border"}
              color={Colors.primaryColor}
              size={24}
            />
          </Pressable>
          <Text style={{ ...Fonts.primaryColor16SemiBold }}>
            {`$`}
            {item.amountPerMonth}/Mo
          </Text>
        </View>
      </Pressable>
    );
    return (
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        data={jobData}
        scrollEnabled={false}
      />
    );
  }

  function jobTypesInfo() {
    const renderItem = ({ item, index }) => (
      <Pressable
        activeOpacity={0.7}
        onPress={() => setselectedJobTypeIndex(index)}
        style={{
          backgroundColor:
            selectedJobTypeIndex === index
              ? Colors.primaryColor
              : Colors.whiteColor,
          ...styles.jobTypeWrapStyle,
        }}
      >
        <Text
          style={
            selectedJobTypeIndex === index
              ? { ...Fonts.whiteColor16Medium }
              : { ...Fonts.grayColor16Medium }
          }
        >
          {item}
        </Text>
      </Pressable>
    );
    return (
      <View>
        <FlatList
          data={jobsTypesList}
          keyExtractor={(index) => `${index}`}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: Sizes.fixPadding + 5.0 }}
        />
      </View>
    );
  }

  function jobRecommendationTitle() {
    return (
      <View style={styles.jobRecommendationTitleWrapper}>
        <Text
          numberOfLines={1}
          style={{ ...Fonts.blackColor19SemiBold, flex: 1 }}
        >
          Job Recommendation
        </Text>
        <Text
          onPress={() => {
            navigation.push("AllJobs");
          }}
          style={{ ...Fonts.primaryColor16SemiBold }}
        >
          See all
        </Text>
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
            <Ionicons name="image-outline" size={20} color={Colors.primaryColor} style={{ opacity: 0.9 }} />
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
            <Ionicons name="home-outline" size={20} color={Colors.primaryColor} />
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
                    opacity: 0.85
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
                    opacity: 0.85
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

  function actionBar() {
    const [rotateAnim] = useState(new Animated.Value(0));

    const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });

    const toggleMenu = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      if (actionMenuVisible) {
        setActionMenuVisible(false);
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        setActionMenuVisible(true);
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    };

    const activeColor = '#0c83ff'

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.actionBar}>
          <Pressable style={[styles.actionIcon, styles.activeAction]}>
            <Feather name="activity" size={24} color={activeColor} />
          </Pressable>
          <Pressable style={styles.actionIcon}>
            <Ionicons
              name="calendar-number-outline"
              size={24}
              color={Colors.primaryColor}
            />
          </Pressable>
          <Pressable style={styles.actionIcon}>
            <AntDesign name="setting" size={24} color={Colors.primaryColor} />
          </Pressable>
          <View style={{ flex: 1 }}></View>
          <Pressable style={[styles.actionIcon, actionMenuVisible && styles.activeAction]} onPress={toggleMenu}>
            <Animated.View style={{ transform: [{ rotate }] }}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color={actionMenuVisible ? activeColor : Colors.primaryColor}
                style={{ opacity: 0.7 }}
              />
            </Animated.View>
          </Pressable>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 10,
            height: actionMenuVisible ? 200 : 0,
          }}
        >
          <Pressable style={styles.actionMenuContainer}>
            <View style={{ width: 30 }}>
              <FontAwesome5 name="sticky-note" size={24} color={Colors.primaryColor} />
            </View>
            <Text style={{ marginLeft: 10, fontFamily: fontFamily.Medium, color: Colors.primaryColor }}>
              Notes
            </Text>
          </Pressable>
          <Pressable style={styles.actionMenuContainer}>
            <View style={{ width: 30 }}>
              <SimpleLineIcons name="people" size={24} color={Colors.primaryColor} />
            </View>
            <Text style={{ marginLeft: 10, fontFamily: fontFamily.Medium, color: Colors.primaryColor }}>
              Friends
            </Text>
          </Pressable>
          <Pressable style={styles.actionMenuContainer}>
            <View style={{ width: 30 }}>
              <FontAwesome name="photo" size={24} color={Colors.primaryColor} />
            </View>
            <Text style={{ marginLeft: 10, fontFamily: fontFamily.Medium, color: Colors.primaryColor }}>
              Photos
            </Text>
          </Pressable>
          <Pressable style={styles.actionMenuContainer}>
            <View style={{ width: 30 }}>
              <AntDesign name="setting" size={24} color={Colors.primaryColor} />
            </View>
            <Text style={{ marginLeft: 10, fontFamily: fontFamily.Medium, color: Colors.primaryColor }}>
              More
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  userCircleImage: {
    width: 56.0,
    height: 56.0,
    borderRadius: 28.0,
    resizeMode: "cover",
  },
  searchFieldWrapeStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.extraLightGrayColor,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding + 2.0,
    borderRadius: Sizes.fixPadding,
  },
  headerWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: Sizes.fixPadding * 2.0,
  },
  notificationBedgeStyle: {
    width: 8.0,
    height: 8.0,
    borderRadius: 4.0,
    borderColor: Colors.whiteColor,
    borderWidth: 1.0,
    position: "absolute",
    backgroundColor: Colors.redColor,
    right: 3,
    top: 2,
  },
  readMoreButtonStyle: {
    backgroundColor: Colors.skyColor,
    paddingVertical: Sizes.fixPadding - 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding * 5.0,
    marginTop: Sizes.fixPadding * 2.0,
  },
  bannerWrapStyle: {
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding * 3.0,
    elevation: 3.0,
    shadowColor: Colors.primaryColor,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  bannerDetailWrapStyle: {
    flex: 1,
    alignItems: "flex-start",
    padding: Sizes.fixPadding * 2.5,
    paddingRight: Sizes.fixPadding,
  },
  bannerImageStyle: {
    height: "100%",
    width: screenWidth,
    resizeMode: "cover",
    marginRight: Sizes.fixPadding,
    overflow: "hidden",
  },
  jobRecommendationTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  jobTypeWrapStyle: {
    paddingHorizontal: Sizes.fixPadding + 8.0,
    paddingVertical: Sizes.fixPadding - 2.0,
    borderRadius: Sizes.fixPadding * 5.0,
    margin: Sizes.fixPadding - 5.0,
  },
  snackBarStyle: {
    backgroundColor: Colors.grayColor,
    position: "absolute",
    left: -10.0,
    right: -10.0,
    bottom: -10.0,
  },
  jobWrapStyle: {
    backgroundColor: "rgba(105, 105, 105, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding * 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  sourceLogoStyle: {
    width: screenWidth / 6.0,
    height: 65.0,
    resizeMode: "contain",
    borderRadius: Sizes.fixPadding,
    overflow: "hidden",
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
    paddingVertical: 8
  },
  setting: {
    position: "absolute",
    top: "50%",
    marginTop: -50,
    right: 0,
    padding: 8,
    backgroundColor: "#0c83ff",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    zIndex: 999,
  },
  actionBar: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  actionIcon: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeAction: {
    backgroundColor: "#e6f2ff",
  },
  actionMenuContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
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
