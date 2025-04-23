import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api/parkings";
import { useDarkMode } from "../contexts/DarkModeContext";
import MyText from "../components/MyText";

import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addFavorite } from "../store/favorites/slice";
import { ParkingsStackNavProps } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";

const ParkingsListScreen = () => {
  const { isDarkMode } = useDarkMode();
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<ParkingsStackNavProps<"Home">["navigation"]>();

  const favorites = useAppSelector((state) => state.favorites);

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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", { url: item.urllinkaddress });
            }}
            className="flex flex-row justify-between items-center p-4 m-4">
            <MyText
              onPress={() => {
                console.log("Test");
              }}
              style={{ color: "black", fontSize: 36 }}>
              {item.name}
            </MyText>
            <TouchableOpacity
              onPress={() => {
                dispatch(addFavorite(item));
              }}>
              <MaterialIcons
                name={
                  favorites.some((p) => p.id === item.id)
                    ? "star-minus"
                    : "star-plus"
                }
                size={32}
                color="#eedd88"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ParkingsListScreen;

const styles = StyleSheet.create({});
