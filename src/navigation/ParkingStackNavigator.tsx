import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ParkingsStackParamsList } from "./types";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import ParkingsDetailsScreen from "../screens/ParkingsDetailsScreen";

const ParkingsStack = createStackNavigator<ParkingsStackParamsList>();

const ParkingStackNavigator = () => {
  return (
    <ParkingsStack.Navigator>
      <ParkingsStack.Screen name="Home" component={ParkingsListScreen} />
      <ParkingsStack.Screen name="Details" component={ParkingsDetailsScreen} />
    </ParkingsStack.Navigator>
  );
};

export default ParkingStackNavigator;
