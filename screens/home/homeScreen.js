import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Colors, Fonts, Sizes, screenWidth } from "../../constants/styles";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text } from "../../components/commonText";
import { Snackbar } from "react-native-paper";

const jobsTypesList = [
  "All Job",
  "Writer",
  "Design",
  "Finance",
  "Product Designer",
  "Data Engineer",
];

const jobList = [
  {
    id: "1",
    sourceLogo: require("../../assets/images/jobs/job1.png"),
    jobType: "UI/UX Designer",
    sourceName: "Airbnb",
    city: "California, USA",
    jobTime: "Full time",
    amountPerMonth: 450,
    inBookmark: true,
  },
  {
    id: "2",
    sourceLogo: require("../../assets/images/jobs/job2.png"),
    jobType: "Financial Planner",
    sourceName: "Twitter",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 400,
    inBookmark: false,
  },
  {
    id: "3",
    sourceLogo: require("../../assets/images/jobs/job3.png"),
    jobType: "Product Manager",
    sourceName: "Microsoft Crop",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 550,
    inBookmark: false,
  },
  {
    id: "4",
    sourceLogo: require("../../assets/images/jobs/job4.png"),
    jobType: "Automation Trester",
    sourceName: "Linkedin",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 550,
    inBookmark: true,
  },
  {
    id: "5",
    sourceLogo: require("../../assets/images/jobs/job1.png"),
    jobType: "UI/UX Designer",
    sourceName: "Airbnb",
    city: "California, USA",
    jobTime: "Full time",
    amountPerMonth: 450,
    inBookmark: true,
  },
  {
    id: "6",
    sourceLogo: require("../../assets/images/jobs/job2.png"),
    jobType: "Financial Planner",
    sourceName: "Twitter",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 400,
    inBookmark: false,
  },
  {
    id: "7",
    sourceLogo: require("../../assets/images/jobs/job3.png"),
    jobType: "Product Manager",
    sourceName: "Microsoft Crop",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 550,
    inBookmark: false,
  },
  {
    id: "8",
    sourceLogo: require("../../assets/images/jobs/job4.png"),
    jobType: "Automation Trester",
    sourceName: "Linkedin",
    city: "California, USA",
    jobTime: "Part time",
    amountPerMonth: 550,
    inBookmark: true,
  },
];

const HomeScreen = ({ navigation }) => {
  const [selectedJobTypeIndex, setselectedJobTypeIndex] = useState(0);
  const [jobData, setjobData] = useState(jobList);
  const [showSnackBar, setshowSnackBar] = useState(false);
  const [snackBarMsg, setsnackBarMsg] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {header()}
          {searchField()}
          {banner()}
          {jobRecommendationTitle()}
          {jobTypesInfo()}
          {jobsAccordingSelection()}
        </ScrollView>
      </View>
      {snackBarInfo()}
    </View>
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
      <TouchableOpacity
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
          <MaterialIcons
            name={item.inBookmark ? "bookmark" : "bookmark-border"}
            color={Colors.primaryColor}
            size={24}
            onPress={() => {
              updateJobData({ id: item.id });
            }}
          />
          <Text style={{ ...Fonts.primaryColor16SemiBold }}>
            {`$`}
            {item.amountPerMonth}/Mo
          </Text>
        </View>
      </TouchableOpacity>
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
      <TouchableOpacity
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
      </TouchableOpacity>
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

  function banner() {
    return (
      <View style={styles.bannerWrapStyle}>
        <View style={styles.bannerDetailWrapStyle}>
          <Text numberOfLines={2} style={{ ...Fonts.whiteColor20SemiBold }}>
            How to find a{`\n`}perfect job for you
          </Text>
          <View style={styles.readMoreButtonStyle}>
            <Text style={{ ...Fonts.whiteColor16Medium }}>Read more</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/images/users/user2.png")}
          style={styles.bannerImageStyle}
        />
      </View>
    );
  }

  function searchField() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.push("Search");
        }}
        style={styles.searchFieldWrapeStyle}
      >
        <MaterialIcons name="search" color={Colors.grayColor} size={20} />
        <Text
          style={{
            ...Fonts.grayColor16Regular,
            marginHorizontal: Sizes.fixPadding,
            flex: 1,
          }}
        >
          Search here
        </Text>
        <MaterialCommunityIcons
          name="filter-variant"
          color={Colors.grayColor}
          size={20}
        />
      </TouchableOpacity>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Image
            source={require("../../assets/images/users/user1.jpeg")}
            style={styles.userCircleImage}
          />
          <View
            style={{
              marginLeft: Sizes.fixPadding + 5.0,
              marginRight: Sizes.fixPadding,
              flex: 1,
            }}
          >
            <Text numberOfLines={1} style={{ ...Fonts.blackColor20Bold }}>
              Hello, Samantha !
            </Text>
            <Text
              style={{
                ...Fonts.grayColor16Regular,
                marginTop: Sizes.fixPadding - 5.0,
              }}
            >
              Good Morning
            </Text>
          </View>
        </View>
        <View>
          <Feather
            name="bell"
            size={24}
            color={Colors.blackColor}
            onPress={() => {
              navigation.push("Notifications");
            }}
          />
          <View style={styles.notificationBedgeStyle}></View>
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
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding - 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding * 5.0,
    marginTop: Sizes.fixPadding * 2.0,
  },
  bannerWrapStyle: {
    backgroundColor: Colors.pinkColor,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding * 3.0,
    elevation: 3.0,
    shadowColor: Colors.pinkColor,
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
    width: screenWidth / 3.0,
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
});
