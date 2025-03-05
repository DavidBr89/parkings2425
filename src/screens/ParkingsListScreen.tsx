import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api/parkings";

const ParkingsListScreen = () => {
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
    <View>
      <FlatList
        data={data?.data.results}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ParkingsListScreen;

const styles = StyleSheet.create({});
