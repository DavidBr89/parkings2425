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
import { persistedStore, store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate persistor={persistedStore}>
        <DarkModeContextProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <ParkingsTabNavigator />
              <StatusBar style="auto" />
            </NavigationContainer>
          </QueryClientProvider>
        </DarkModeContextProvider>
      </PersistGate>
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
