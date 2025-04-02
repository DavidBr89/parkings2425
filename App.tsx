import "./global.css";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ParkingsTabNavigator from "./src/navigation/ParkingsTabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useForegroundPermissions } from "expo-location";
import { useEffect } from "react";
import DarkModeContextProvider from "./src/contexts/DarkModeContext";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [locationStatus, requestLocationPermission] =
    useForegroundPermissions();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const [isFontLoaded, fontError] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
  });

  useEffect(() => {
    if (isFontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [isFontLoaded, fontError]);

  if (!isFontLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <DarkModeContextProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <ParkingsTabNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </QueryClientProvider>
      </DarkModeContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
