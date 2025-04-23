import { View, Text, FlatList } from "react-native";
import React from "react";
import { useAppSelector } from "../hooks/redux";
import MyText from "../components/MyText";

const FavoritesScreen = () => {
  const favorites = useAppSelector((state) => state.favorites);

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <MyText>{item.name}</MyText>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FavoritesScreen;
