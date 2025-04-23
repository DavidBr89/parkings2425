import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/redux";
import CounterButton from "../components/CounterButton";

const CounterScreen = () => {
  const storeState = useAppSelector((state) => state.counter);

  return (
    <View className="p-4">
      <Text>CounterScreen</Text>
      <Text className="text-4xl">{storeState}</Text>
      <CounterButton />
      <CounterButton value={5} />
    </View>
  );
};

export default CounterScreen;
