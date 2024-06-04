import React, { useCallback } from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabBarScreen from "./components/bottomTabBarScreen";
import { LogBox } from "react-native";
import SearchScreen from "./screens/search/searchScreen";
import AllJobsScreen from "./screens/allJobs/allJobsScreen";
import JobDetailScreen from "./screens/jobDetail/jobDetailScreen";
import UploadSuccessScreen from "./screens/uploadSuccess/uploadSuccessScreen";
import MessageScreen from "./screens/message/messageScreen";
import EditAboutScreen from "./screens/editAbout/editAboutScreen";
import AddSkillsScreen from "./screens/addSkills/addSkillsScreen";
import EditExperienceScreen from "./screens/editExperience/editExperienceScreen";
import EditEducationScreen from "./screens/editEducation/editEducationScreen";
import SettingsScreen from "./screens/settings/settingsScreen";
import EditContactInfoScreen from "./screens/editContactInfo/editContactInfoScreen";
import EditProfileScreen from "./screens/editProfile/editProfileScreen";
import NotificationsScreen from "./screens/notifications/notificationsScreen";
import AppliedJobsScreen from "./screens/appliedJobs/appliedJobsScreen";
import ContactUsScreen from "./screens/contactUs/contactUsScreen";
import TermsAndConditionScreen from "./screens/termsAndCondition/termsAndConditionScreen";
import SplashScreen from "./screens/splashScreen";
import OnboardingScreen from "./screens/onboarding/onboardingScreen";
import LoginScreen from "./screens/auth/loginScreen";
import RegisterScreen from "./screens/auth/registerScreen";
import VerificationScreen from "./screens/auth/verificationScreen";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

ExpoSplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

function MyApp() {
  const [fontsLoaded] = useFonts({
    'SF-Compact-Display-Regular': require('./assets/fonts/SF-Compact-Display-Regular.ttf'),
    'SF-Compact-Display-Medium': require('./assets/fonts/SF-Compact-Display-Medium.ttf'),
    'SF-Compact-Display-SemiBold': require('./assets/fonts/SF-Compact-Display-Semibold.ttf'),
    'SF-Compact-Display-Bold': require('./assets/fonts/SF-Compact-Display-Bold.ttf'),
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
          <Stack.Screen name="Onboadring" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} options={{ ...TransitionPresets.DefaultTransition }} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="AllJobs" component={AllJobsScreen} />
          <Stack.Screen name="JobDetail" component={JobDetailScreen} />
          <Stack.Screen name="UploadSuccess" component={UploadSuccessScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="EditContactInfo" component={EditContactInfoScreen} />
          <Stack.Screen name="EditAbout" component={EditAboutScreen} />
          <Stack.Screen name="AddSkills" component={AddSkillsScreen} />
          <Stack.Screen name="EditExperience" component={EditExperienceScreen} />
          <Stack.Screen name="EditEducation" component={EditEducationScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="AppliedJobs" component={AppliedJobsScreen} />
          <Stack.Screen name="ContactUs" component={ContactUsScreen} />
          <Stack.Screen name="TermsAndCondition" component={TermsAndConditionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MyApp;