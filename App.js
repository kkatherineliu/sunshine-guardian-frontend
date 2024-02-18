const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "./screens/GetStarted";
import Homescreen from "./screens/Homescreen";
import ReminderScreen from "./screens/ReminderScreen";
import GetStartedSunscreen from "./screens/GetStartedSunscreen";
import SettingsMatch from "./screens/SettingsMatch";
import SettingsMatch1 from "./screens/SettingsMatch1";
import SettingsSkinComplexion from "./screens/SettingsSkinComplexion";
import SettingsLocation from "./screens/SettingsLocation";
import GetStartedName from "./screens/GetStartedName";
import GetStartedLocation from "./screens/GetStartedLocation";
import GetStartedComplexion from "./screens/GetStartedComplexion";
import GetStartedSunscreenM from "./screens/GetStartedSunscreenM";
import GetStartedSkinType from "./screens/GetStartedSkinType";
import GetStartedMatch from "./screens/GetStartedMatch";
import Loading from "./screens/Loading";
import SettingsMain from "./screens/SettingsMain";
import SettingsSunscreen from "./screens/SettingsSunscreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { LocationProvider } from './context/LocationContext';
import { SkinTypeProvider } from './context/SkinTypeContext';
import { FitzProvider } from './context/FitzContext';

// change the ones below to also follow the same form for altering information
import { ReapplyEveryContext } from "./context/ReapplyEveryContext";
import { UvIndexContext } from "./context/UvIndexContext";
import { SpfLevelContext } from "./context/SpfLevelContext";
import { TemperatureTodayContext } from "./context/TemperatureTodayContext";
import { GreetingUserContext } from "./context/GreetingUserContext";
import { ReapplyTimeContext } from "./context/ReapplyTimeContext";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [reapplyTime, setReapplyTime] = React.useState("45");
  const [greetingUser, setGreetingUser] = React.useState("Hi Rachel");
  const [temperatureToday, setTemperatureToday] = React.useState("28°C");
  const [spfLevel, setSpfLevel] = React.useState("30");
  const [uvIndex, setUvIndex] = React.useState("7");
  const [reapplyEvery, setReapplyEvery] = React.useState("1 hour");
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <FitzProvider>
      <SkinTypeProvider>
        <LocationProvider>
          <ReapplyEveryContext.Provider value={{ reapplyEvery, setReapplyEvery }}>
            <UvIndexContext.Provider value={{ uvIndex, setUvIndex }}>
              <SpfLevelContext.Provider value={{ spfLevel, setSpfLevel }}>
                <TemperatureTodayContext.Provider
                  value={{ temperatureToday, setTemperatureToday }}
                >
                  <GreetingUserContext.Provider
                    value={{ greetingUser, setGreetingUser }}
                  >
                    <ReapplyTimeContext.Provider
                      value={{ reapplyTime, setReapplyTime }}
                    >
                      <>
                        <NavigationContainer>
                          {hideSplashScreen ? (
                            <Stack.Navigator
                              initialRouteName="Loading"
                              screenOptions={{ headerShown: false }}
                            >
                              <Stack.Screen
                                name="GetStarted"
                                component={GetStarted}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="Homescreen"
                                component={Homescreen}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="ReminderScreen"
                                component={ReminderScreen}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedSunscreen"
                                component={GetStartedSunscreen}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="SettingsMatch"
                                component={SettingsMatch}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="SettingsMatch1"
                                component={SettingsMatch1}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="SettingsSkinComplexion"
                                component={SettingsSkinComplexion}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="SettingsLocation"
                                component={SettingsLocation}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedName"
                                component={GetStartedName}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedLocation"
                                component={GetStartedLocation}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedComplexion"
                                component={GetStartedComplexion}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedSunscreenM"
                                component={GetStartedSunscreenM}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedSkinType"
                                component={GetStartedSkinType}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="GetStartedMatch"
                                component={GetStartedMatch}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="Loading"
                                component={Loading}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="SettingsMain"
                                component={SettingsMain}
                                options={{ headerShown: false }}
                              />
                              <Stack.Screen
                                name="SettingsSunscreen"
                                component={SettingsSunscreen}
                                options={{ headerShown: false }}
                              />
                            </Stack.Navigator>
                          ) : null}
                        </NavigationContainer>
                      </>
                    </ReapplyTimeContext.Provider>
                  </GreetingUserContext.Provider>
                </TemperatureTodayContext.Provider>
              </SpfLevelContext.Provider>
            </UvIndexContext.Provider>
          </ReapplyEveryContext.Provider>
        </LocationProvider>
      </SkinTypeProvider>
    </FitzProvider>
  );
};
export default App;
