import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as ExpoSplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { LogBox } from "react-native";
import RightDrawerScreen from "./components/rightDrawerScreen";
import AddSkillsScreen from "./screens/addSkills/addSkillsScreen";
import AllJobsScreen from "./screens/allJobs/allJobsScreen";
import AppliedJobsScreen from "./screens/appliedJobs/appliedJobsScreen";
import LoginScreen from "./screens/auth/loginScreen";
import RegisterScreen from "./screens/auth/registerScreen";
import VerificationScreen from "./screens/auth/verificationScreen";
import JobPostScreen from "./screens/business/jobPost/jobPostScreen";
import ContactUsScreen from "./screens/contactUs/contactUsScreen";
import EditAboutScreen from "./screens/editAbout/editAboutScreen";
import EditContactInfoScreen from "./screens/editContactInfo/editContactInfoScreen";
import EditEducationScreen from "./screens/editEducation/editEducationScreen";
import EditExperienceScreen from "./screens/editExperience/editExperienceScreen";
import EditProfileScreen from "./screens/editProfile/editProfileScreen";
import JobDetailScreen from "./screens/jobDetail/jobDetailScreen";
import MessageScreen from "./screens/message/messageScreen";
import NotificationsScreen from "./screens/notifications/notificationsScreen";
import OnboardingScreen from "./screens/onboarding/onboardingScreen";
import SearchScreen from "./screens/search/searchScreen";
import SettingsScreen from "./screens/settings/settingsScreen";
import SplashScreen from "./screens/splashScreen";
import TermsAndConditionScreen from "./screens/termsAndCondition/termsAndConditionScreen";
import UploadSuccessScreen from "./screens/uploadSuccess/uploadSuccessScreen";
import "./styles.css";

ExpoSplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

function MyApp() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen
            name="AppRoot"
            component={RightDrawerScreen}
            options={{ ...TransitionPresets.DefaultTransition }}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="AllJobs" component={AllJobsScreen} />
          <Stack.Screen name="JobDetail" component={JobDetailScreen} />
          <Stack.Screen name="UploadSuccess" component={UploadSuccessScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen
            name="EditContactInfo"
            component={EditContactInfoScreen}
          />
          <Stack.Screen name="EditAbout" component={EditAboutScreen} />
          <Stack.Screen name="AddSkills" component={AddSkillsScreen} />
          <Stack.Screen
            name="EditExperience"
            component={EditExperienceScreen}
          />
          <Stack.Screen name="EditEducation" component={EditEducationScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="AppliedJobs" component={AppliedJobsScreen} />
          <Stack.Screen name="ContactUs" component={ContactUsScreen} />
          <Stack.Screen
            name="TermsAndCondition"
            component={TermsAndConditionScreen}
          />
          {/* Business */}
          <Stack.Screen name="JobPost" component={JobPostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MyApp;
