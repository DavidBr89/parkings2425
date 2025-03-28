import "./global.css";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ParkingsTabNavigator from "./src/navigation/ParkingsTabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useForegroundPermissions } from "expo-location";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App() {
  const [locationStatus, requestLocationPermission] =
    useForegroundPermissions();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ParkingsTabNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
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
