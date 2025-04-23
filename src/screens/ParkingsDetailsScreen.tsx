import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import { ParkingsStackNavProps } from "../navigation/types";

const ParkingsDetailsScreen = () => {
  const { params } = useRoute<ParkingsStackNavProps<"Details">["route"]>();

  return (
    <View className="flex-1">
      <WebView source={{ uri: params.url }} />
    </View>
  );
};

export default ParkingsDetailsScreen;

const styles = StyleSheet.create({});
