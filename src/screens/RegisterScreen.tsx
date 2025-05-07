import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Geen geldig email.").required(),
  password: Yup.string().required(),
});

const RegisterScreen = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        await updateProfile(user.user, {
          displayName: values.name,
        });
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });

  return (
    <View className="flex-1 justify-center  bg-white p-8 gap-4">
      <Text className="text-3xl">
        {auth.currentUser ? "Ingelogd" : "Niet ingelogd"}
      </Text>
      <Text className="text-center">RegisterScreen</Text>
      <TextInput
        value={values.name}
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        placeholder="Naam"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        autoComplete={Platform.OS === "ios" ? "name" : "address-line1"}
        className="border border-neutral-400 rounded-lg px-4 py-2"
      />
      <TextInput
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
        autoComplete={Platform.OS === "ios" ? "email" : "address-line1"}
        className="border border-neutral-400 rounded-lg px-4 py-2"
      />
      {errors.email ? <Text>{errors.email}</Text> : null}
      <TextInput
        placeholder="Wachtwoord"
        secureTextEntry
        autoComplete="password"
        value={values.password}
        onBlur={handleBlur("email")}
        onChangeText={(text) => {
          setFieldValue("password", text);
        }}
        className="border border-neutral-400 rounded-lg px-4 py-2"
      />
      <Button title="Registreren" onPress={() => handleSubmit()}></Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
