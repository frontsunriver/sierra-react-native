import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ConfirmDialog } from "react-native-simple-dialogs";
import { Text } from "../../components/commonText";
import MyStatusBar from "../../components/myStatusBar";
import {
  Colors,
  CommonStyles,
  Fonts,
  Sizes,
  screenHeight,
  screenWidth,
} from "../../constants/styles";

const requirementsList = [
  "Excepteur sint occaecat cupidatat non proident.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  "Ut enim ad minima veniam, quis nostrum.",
  "At vero eos et accusamus et iusto odio dignissimo.",
  "Lorem ipsum dolor sit amet, consectetur.",
];

const JobDetailScreen = ({ navigation, route }) => {
  const { isPoster } = route.params;
  const [showUploadDialog, setshowUploadDialog] = useState(false);
  const [deleteConfirmDlgVisible, setDeleteConfirmDlgVisible] = useState(false);

  const handleConfirm = () => {
    setDeleteConfirmDlgVisible(false);
  };

  const handleCancel = () => {
    setDeleteConfirmDlgVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {serviceProviderInfo()}
          {jonInfo()}
          {divider()}
          {jonDescription()}
          {divider()}
          {requirementsInfo()}
        </ScrollView>
        {isPoster ? updateButton() : applyButton()}
        {uploadResumeDialog()}
      </View>
      <ConfirmDialog
        title="Delete Job"
        message="Are you sure to delete this job?"
        visible={deleteConfirmDlgVisible}
        onTouchOutside={() => setDeleteConfirmDlgVisible(false)}
        positiveButton={{
          title: "YES",
          onPress: handleConfirm,
        }}
        negativeButton={{
          title: "NO",
          onPress: handleCancel,
        }}
      />
    </View>
  );

  function uploadResumeDialog() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showUploadDialog}
        onRequestClose={() => {
          setshowUploadDialog(false);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setshowUploadDialog(false);
          }}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ justifyContent: "center", flex: 1 }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {}}
              style={{ ...CommonStyles.dialogStyle, alignSelf: "center" }}
            >
              <View style={{ maxHeight: screenHeight / 1.5 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TouchableWithoutFeedback>
                    <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                      <Text
                        style={{
                          ...Fonts.blackColor20Bold,
                          textAlign: "center",
                          marginBottom: Sizes.fixPadding,
                        }}
                      >
                        Upload Resume/CV
                      </Text>
                      <Text
                        style={{
                          ...Fonts.grayColor16Regular,
                          textAlign: "center",
                        }}
                      >
                        Upload your CV or Resume to apply for the job vacancy.
                      </Text>
                      <View style={styles.dragFileBox}>
                        <Ionicons
                          name="share"
                          size={30}
                          color={Colors.primaryColor}
                          style={{ marginBottom: Sizes.fixPadding - 5.0 }}
                        />
                        <Text
                          style={{
                            ...Fonts.blackColor14Regular,
                            marginVertical: Sizes.fixPadding - 5.0,
                          }}
                        >
                          Drag & Drop your file here
                        </Text>
                        <Text style={{ ...Fonts.blackColor14Regular }}>OR</Text>
                        <View
                          style={{
                            ...CommonStyles.buttonStyle,
                            ...styles.browseFileButton,
                          }}
                        >
                          <Text style={{ ...Fonts.whiteColor16Medium }}>
                            Browse Files
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          setshowUploadDialog(false),
                            navigation.push("UploadSuccess");
                        }}
                        style={{
                          ...CommonStyles.buttonStyle,
                          marginTop: Sizes.fixPadding,
                        }}
                      >
                        <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                          Apply
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableWithoutFeedback>
                </ScrollView>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function applyButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setshowUploadDialog(true);
        }}
        style={{
          ...CommonStyles.buttonStyle,
          margin: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Apply Now</Text>
      </TouchableOpacity>
    );
  }

  function updateButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("JobPost", {
            id: 1,
          });
        }}
        style={{
          ...CommonStyles.buttonStyle,
          margin: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.whiteColor18SemiBold }}>Update</Text>
      </TouchableOpacity>
    );
  }

  function requirementsInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text
          style={{
            ...Fonts.blackColor19SemiBold,
            marginBottom: Sizes.fixPadding,
          }}
        >
          Requirements
        </Text>
        {requirementsList.map((item, index) => (
          <View
            key={`${index}`}
            style={{ flexDirection: "row", marginBottom: Sizes.fixPadding }}
          >
            <View style={styles.bulletStyle} />
            <Text style={{ ...Fonts.grayColor16Regular, flex: 1 }}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }

  function jonDescription() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.blackColor19SemiBold }}>Job Descriptions</Text>
        <Text
          style={{
            ...Fonts.grayColor16Regular,
            textAlign: "justify",
            marginTop: Sizes.fixPadding,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper
          habitant nulla mauris. Amet, tincidunt a amet, et aliquam in habitant
          dictum. Quis ac et proin quis.
        </Text>
      </View>
    );
  }

  function divider() {
    return (
      <View
        style={{
          height: 1.0,
          backgroundColor: Colors.lightGrayColor,
          margin: Sizes.fixPadding * 2.0,
        }}
      ></View>
    );
  }

  function jonInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <View style={{ ...styles.rowSpaceBetween }}>
          <Text style={{ ...Fonts.grayColor16Regular, flex: 1 }}>Salary</Text>
          <Text style={{ ...Fonts.primaryColor16Medium }}>$450/Mo</Text>
        </View>
        <View
          style={{
            ...styles.rowSpaceBetween,
            marginVertical: Sizes.fixPadding + 2.0,
          }}
        >
          <Text style={{ ...Fonts.grayColor16Regular, flex: 1 }}>Type</Text>
          <Text style={{ ...Fonts.primaryColor16Medium }}>Full Time</Text>
        </View>
        <View style={{ ...styles.rowSpaceBetween }}>
          <Text style={{ ...Fonts.grayColor16Regular, flex: 1 }}>Location</Text>
          <Text style={{ ...Fonts.primaryColor16Medium }}>California, USA</Text>
        </View>
      </View>
    );
  }

  function serviceProviderInfo() {
    return (
      <View style={styles.serviceProviderWrapper}>
        <Image
          source={require("../../assets/images/jobs/job1.png")}
          style={styles.sourceLogoStyle}
        />
        <View style={{ flex: 1, marginLeft: Sizes.fixPadding * 2.0 }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor20SemiBold }}>
            Senior Software Engineer
          </Text>
          <Text
            style={{
              ...Fonts.grayColor15Medium,
              marginTop: Sizes.fixPadding - 5.0,
            }}
          >
            PIEXEC
          </Text>
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <MaterialIcons
          name="keyboard-backspace"
          size={26}
          color={Colors.blackColor}
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text
          style={{ ...Fonts.blackColor20Bold, flex: 0.9, textAlign: "center" }}
        >
          Job Details
        </Text>
        {isPoster ? (
          <TouchableOpacity onPress={() => setDeleteConfirmDlgVisible(true)}>
            <Ionicons name="trash" size={24} color={Colors.grayColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <MaterialIcons name="share" size={22} color={Colors.blackColor} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
};

export default JobDetailScreen;

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: Sizes.fixPadding * 2.0,
  },
  sourceLogoStyle: {
    width: screenWidth / 6.0,
    height: 65.0,
    resizeMode: "contain",
    borderRadius: Sizes.fixPadding,
    overflow: "hidden",
  },
  serviceProviderWrapper: {
    backgroundColor: Colors.extraLightGrayColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding * 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding,
  },
  bulletStyle: {
    width: 6.0,
    height: 6.0,
    borderRadius: 3.0,
    backgroundColor: Colors.grayColor,
    marginTop: Sizes.fixPadding - 3.0,
    marginRight: Sizes.fixPadding,
  },
  dragFileBox: {
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: Sizes.fixPadding,
    borderColor: Colors.primaryColor,
    borderWidth: 1.5,
    borderStyle: "dashed",
    alignItems: "center",
    padding: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding * 2.0,
  },
  browseFileButton: {
    borderRadius: Sizes.fixPadding * 2.0,
    paddingVertical: Sizes.fixPadding - 2.0,
    paddingHorizontal: Sizes.fixPadding + 8.0,
    marginTop: Sizes.fixPadding + 5.0,
  },
});
