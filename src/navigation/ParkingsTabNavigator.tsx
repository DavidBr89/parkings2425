import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParkingsTabParamsList } from "./types";
import ParkingStackNavigator from "./ParkingStackNavigator";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import ParkingsDrawerNavigator from "./ParkingsDrawerNavigator";

const ParkingsTab = createBottomTabNavigator<ParkingsTabParamsList>();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator>
      <ParkingsTab.Screen name="HomeStack" component={ParkingStackNavigator} />
      <ParkingsTab.Screen name="Map" component={ParkingsMapScreen} />
      <ParkingsTab.Screen
        name="SettingsDrawer"
        component={ParkingsDrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;
