import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParkingsDrawerParamsList } from "./types";
import NativeScreen from "../screens/NativeScreen";

const ParkingsDrawer = createDrawerNavigator<ParkingsDrawerParamsList>();

const ParkingsDrawerNavigator = () => {
  return (
    <ParkingsDrawer.Navigator>
      <ParkingsDrawer.Screen name="Native" component={NativeScreen} />
    </ParkingsDrawer.Navigator>
  );
};

export default ParkingsDrawerNavigator;
