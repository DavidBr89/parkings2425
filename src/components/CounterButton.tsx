import { View, Text, Button } from "react-native";
import React from "react";
import { useAppDispatch } from "../hooks/redux";
import { increment, incrementBy } from "../store/counter/slice";

interface CounterButtonProps {
  value?: number;
}

const CounterButton = ({ value = 1 }: CounterButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      title="Verhoog"
      onPress={() => {
        dispatch(incrementBy(value));
      }}
    />
  );
};

export default CounterButton;
