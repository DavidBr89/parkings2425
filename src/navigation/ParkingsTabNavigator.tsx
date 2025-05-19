import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParkingsTabParamsList } from "./types";
import ParkingStackNavigator from "./ParkingStackNavigator";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import ParkingsDrawerNavigator from "./ParkingsDrawerNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";

import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CarsStackNavigator from "./CarsStackNavigator";

const ParkingsTab = createBottomTabNavigator<ParkingsTabParamsList>();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "Montserrat" },
        tabBarLabelStyle: { fontFamily: "Montserrat" },
      }}>
      <ParkingsTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
        name="HomeStack"
        component={ParkingStackNavigator}
      />
      <ParkingsTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" color={color} size={size} />
          ),
        }}
        name="Map"
        component={ParkingsMapScreen}
      />
      <ParkingsTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <ParkingsTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="car" color={color} size={size} />
          ),
          title: "Cars",
        }}
        name="CarsStack"
        component={CarsStackNavigator}
      />
      <ParkingsTab.Screen
        name="SettingsDrawer"
        component={ParkingsDrawerNavigator}
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;
