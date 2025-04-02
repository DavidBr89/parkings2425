import { StyleSheet, Text, TextProps, View } from "react-native";
import React, { PropsWithChildren } from "react";

type MyTextProps = TextProps & Required<PropsWithChildren>;

const MyText = (props: MyTextProps) => {
  return (
    <Text
      {...props}
      style={
        props.style !== undefined && typeof props.style === "object"
          ? { ...styles.container, ...props.style }
          : styles.container
      }>
      {props.children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  container: {
    fontFamily: "Montserrat",
    color: "blue",
  },
});
