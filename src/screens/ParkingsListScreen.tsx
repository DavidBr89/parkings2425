import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api/parkings";
import { useDarkMode } from "../contexts/DarkModeContext";
import MyText from "../components/MyText";

const ParkingsListScreen = () => {
  const { isDarkMode } = useDarkMode();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
      }}>
      <MyText>Test</MyText>
      <FlatList
        data={data?.data.results}
        renderItem={({ item }) => (
          <MyText
            onPress={() => {
              console.log("Test");
            }}
            style={{ color: "red", fontSize: 36 }}>
            {item.name}
          </MyText>
        )}
      />
    </View>
  );
};

export default ParkingsListScreen;

const styles = StyleSheet.create({});
