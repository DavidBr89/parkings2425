import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const NativeScreen = () => {
  return (
    <View>
      <Text>NativeScreen</Text>

      <Button title="Wijzig wachtwoord" onPress={() => {}} />
      <Button
        title="Loguit"
        onPress={() => {
          signOut(auth);
        }}
      />
    </View>
  );
};

export default NativeScreen;

const styles = StyleSheet.create({});
