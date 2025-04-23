import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParkingsDrawerParamsList } from "./types";
import NativeScreen from "../screens/NativeScreen";
import LocationScreen from "../screens/LocationScreen";
import CounterScreen from "../screens/CounterScreen";

const ParkingsDrawer = createDrawerNavigator<ParkingsDrawerParamsList>();

const ParkingsDrawerNavigator = () => {
  return (
    <ParkingsDrawer.Navigator>
      <ParkingsDrawer.Screen name="Native" component={NativeScreen} />
      <ParkingsDrawer.Screen name="Location" component={LocationScreen} />
      <ParkingsDrawer.Screen name="Counter" component={CounterScreen} />
    </ParkingsDrawer.Navigator>
  );
};

export default ParkingsDrawerNavigator;
