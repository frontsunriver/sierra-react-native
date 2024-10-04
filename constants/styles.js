import { Dimensions } from "react-native";

export const Colors = {
  primaryColor: "#1f2937",
  lightPrimaryColor: "rgba(15, 52, 96, 0.05)",
  whiteColor: "#FFFFFF",
  blackColor: "#000000",
  grayColor: "#484848",
  lightGrayColor: "rgba(105, 105, 105, 0.3)",
  extraLightGrayColor: "rgba(105, 105, 105, 0.05)",
  mediumGrayColor: "#DEDEDE",
  redColor: "#FF0000",
  pinkColor: "#E94560",
  blueColor: "#0047FF",
  greenColor: "#009D23",
  skyColor: "#51bce7",
};

export const fontFamily = {
  Regular: "Inter-Regular",
  Thin: "Inter-Thin",
  Light: "Inter-Light",
  ExtraLight: "Inter-ExtraLight",
  Medium: "Inter-Medium",
  SemiBold: "Inter-SemiBold",
  Bold: "Inter-Bold",
};

export const Fonts = {
  whiteColor16Regular: {
    color: Colors.whiteColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Regular,
  },

  whiteColor12Medium: {
    color: Colors.whiteColor,
    fontSize: 12.0,
    fontFamily: fontFamily.Medium,
  },

  whiteColor14Medium: {
    color: Colors.whiteColor,
    fontSize: 14.0,
    fontFamily: fontFamily.Medium,
  },

  whiteColor16Medium: {
    color: Colors.whiteColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Medium,
  },

  whiteColor18SemiBold: {
    color: Colors.whiteColor,
    fontSize: 18.0,
    fontFamily: fontFamily.SemiBold,
  },

  whiteColor19SemiBold: {
    color: Colors.whiteColor,
    fontSize: 19.0,
    fontFamily: fontFamily.SemiBold,
  },

  whiteColor20SemiBold: {
    color: Colors.whiteColor,
    fontSize: 20.0,
    fontFamily: fontFamily.SemiBold,
  },

  whiteColor20Bold: {
    color: Colors.whiteColor,
    fontSize: 20.0,
    fontFamily: fontFamily.Bold,
  },

  blackColor11Regular: {
    color: Colors.blackColor,
    fontSize: 11.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor12Regular: {
    color: Colors.blackColor,
    fontSize: 12.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor13Regular: {
    color: Colors.blackColor,
    fontSize: 13.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor10Regular: {
    color: Colors.blackColor,
    fontSize: 10.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor10Bold: {
    color: Colors.blackColor,
    fontSize: 10.0,
    fontFamily: fontFamily.Bold,
  },
  blackColor11Bold: {
    color: Colors.blackColor,
    fontSize: 11.0,
    fontFamily: fontFamily.Bold,
  },
  blackColor12Bold: {
    color: Colors.blackColor,
    fontSize: 12.0,
    fontFamily: fontFamily.Bold,
  },
  blackColor13Bold: {
    color: Colors.blackColor,
    fontSize: 13.0,
    fontFamily: fontFamily.Bold,
  },

  blackColor14Regular: {
    color: Colors.blackColor,
    fontSize: 14.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor15Regular: {
    color: Colors.blackColor,
    fontSize: 15.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor16Regular: {
    color: Colors.blackColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Regular,
  },

  blackColor15Medium: {
    color: Colors.blackColor,
    fontSize: 15.0,
    fontFamily: fontFamily.Medium,
  },

  blackColor15Bold: {
    color: Colors.blackColor,
    fontSize: 15.0,
    fontFamily: fontFamily.Bold,
  },

  blackColor16Medium: {
    color: Colors.blackColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Medium,
  },

  blackColor18Medium: {
    color: Colors.blackColor,
    fontSize: 18.0,
    fontFamily: fontFamily.Medium,
  },

  blackColor17SemiBold: {
    color: Colors.blackColor,
    fontSize: 17.0,
    fontFamily: fontFamily.SemiBold,
  },

  blackColor18SemiBold: {
    color: Colors.blackColor,
    fontSize: 18.0,
    fontFamily: fontFamily.SemiBold,
  },

  blackColor19SemiBold: {
    color: Colors.blackColor,
    fontSize: 19.0,
    fontFamily: fontFamily.SemiBold,
  },

  blackColor20SemiBold: {
    color: Colors.blackColor,
    fontSize: 20.0,
    fontFamily: fontFamily.SemiBold,
  },

  blackColor20Bold: {
    color: Colors.blackColor,
    fontSize: 20.0,
    fontFamily: fontFamily.Bold,
  },

  blackColor22Bold: {
    color: Colors.blackColor,
    fontSize: 22.0,
    fontFamily: fontFamily.Bold,
  },

  grayColor11Regular: {
    color: Colors.grayColor,
    fontSize: 11.0,
    fontFamily: fontFamily.Regular,
  },

  grayColor12Regular: {
    color: Colors.grayColor,
    fontSize: 12.0,
    fontFamily: fontFamily.Regular,
  },

  grayColor13Regular: {
    color: Colors.grayColor,
    fontSize: 13.0,
    fontFamily: fontFamily.Regular,
  },

  grayColor14Regular: {
    color: Colors.grayColor,
    fontSize: 14.0,
    fontFamily: fontFamily.Regular,
  },

  grayColor15Regular: {
    color: Colors.grayColor,
    fontSize: 15.0,
    fontFamily: fontFamily.Regular,
  },

  grayColor16Regular: {
    color: Colors.grayColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Regular,
  },

  grayColor14Medium: {
    color: Colors.grayColor,
    fontSize: 14.0,
    fontFamily: fontFamily.Medium,
  },

  grayColor15Medium: {
    color: Colors.grayColor,
    fontSize: 15.0,
    fontFamily: fontFamily.Medium,
  },

  grayColor16Medium: {
    color: Colors.grayColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Medium,
  },

  grayColor18SemiBold: {
    color: Colors.grayColor,
    fontSize: 18.0,
    fontFamily: fontFamily.SemiBold,
  },

  grayColor19SemiBold: {
    color: Colors.grayColor,
    fontSize: 19.0,
    fontFamily: fontFamily.SemiBold,
  },

  primaryColor16Medium: {
    color: Colors.primaryColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Medium,
  },

  primaryColor16SemiBold: {
    color: Colors.primaryColor,
    fontSize: 16.0,
    fontFamily: fontFamily.SemiBold,
  },

  primaryColor18SemiBold: {
    color: Colors.primaryColor,
    fontSize: 18.0,
    fontFamily: fontFamily.SemiBold,
  },

  primaryColor20SemiBold: {
    color: Colors.primaryColor,
    fontSize: 20.0,
    fontFamily: fontFamily.SemiBold,
  },

  primaryColor16Bold: {
    color: Colors.primaryColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Bold,
  },

  primaryColor20Bold: {
    color: Colors.primaryColor,
    fontSize: 20.0,
    fontFamily: fontFamily.Bold,
  },

  blueColor15Regular: {
    color: Colors.blueColor,
    fontSize: 15.0,
    fontFamily: fontFamily.Regular,
  },

  redColor16Regular: {
    color: Colors.redColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Regular,
  },

  redColor15SemiBold: {
    color: Colors.redColor,
    fontSize: 15.0,
    fontFamily: fontFamily.SemiBold,
  },

  greenColor15SemiBold: {
    color: Colors.greenColor,
    fontSize: 15.0,
    fontFamily: fontFamily.SemiBold,
  },

  pinkColor16Bold: {
    color: Colors.pinkColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Bold,
  },

  skyColor16Bold: {
    color: Colors.skyColor,
    fontSize: 16.0,
    fontFamily: fontFamily.Bold,
  },

  pinkColor20Bold: {
    color: Colors.pinkColor,
    fontSize: 20.0,
    fontFamily: fontFamily.Bold,
  },

  skyColor20Bold: {
    color: Colors.skyColor,
    fontSize: 20.0,
    fontFamily: fontFamily.Bold,
  },
};

export const Sizes = {
  fixPadding: 10.0,
};

export const CommonStyles = {
  buttonStyle: {
    elevation: 5.0,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.fixPadding,
    padding: Sizes.fixPadding * 1.9,
    shadowColor: Colors.primaryColor,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  dialogStyle: {
    backgroundColor: Colors.whiteColor,
    padding: 0.0,
    width: "90%",
    borderRadius: Sizes.fixPadding,
  },
  headerTextStyle: {
    ...Fonts.blackColor20Bold,
    textAlign: "center",
    maxWidth: "80%",
    alignSelf: "center",
  },
  textFieldWrapper: {
    backgroundColor: Colors.extraLightGrayColor,
    justifyContent: "center",
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding + 3.0,
    borderRadius: Sizes.fixPadding,
    marginTop: Sizes.fixPadding,
  },
};

export const screenWidth = Dimensions.get("window").width;

export const screenHeight = Dimensions.get("window").height;
