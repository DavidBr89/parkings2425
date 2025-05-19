import { View, Text, TextInput, Switch, Button } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/src/config/firebase";
import { useNavigation } from "@react-navigation/native";
import {
  CarssStackParamsList,
  CarsStackNavProps,
} from "@/src/navigation/types";

const carTypes = [
  {
    id: 1,
    label: "Hatchback",
    value: "hatchback",
  },
  {
    id: 2,
    label: "Sedan",
    value: "sedan",
  },
  {
    id: 3,
    label: "Coupé",
    value: "coupé",
  },
  {
    id: 4,
    label: "SUV",
    value: "suv",
  },
];

const AddCarScreen = () => {
  const navigation = useNavigation<CarsStackNavProps<"AddCar">["navigation"]>();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      licensePlate: "",
      isElectric: true,
      type: "suv",
    },
    onSubmit: async (values) => {
      // In mijn firestore steken

      try {
        // 1ste manier: setDoc -> eigen id
        const newCarRef = doc(db, "cars", values.licensePlate);
        await setDoc(newCarRef, { ...values, createdAt: serverTimestamp() });

        // 2de manier: addDoc -> gegenereerde id firestore
        // const carsCollectionRef = collection(db, "cars");
        // await addDoc(carsCollectionRef, {
        //   ...values,
        //   createdAt: serverTimestamp(),
        // });
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      } catch (error) {
        console.error(error);
      }

      console.log(values);
    },
  });

  return (
    <View className="flex-1 p-4 flex gap-4">
      <TextInput
        className="border rounded-lg px-4 py-2"
        placeholder="Nummerplaat"
        value={values.licensePlate}
        onChangeText={handleChange("licensePlate")}
        onBlur={handleBlur("licensePlate")}
      />
      <View className="flex flex-row justify-between items-center">
        <Text>Elektrisch?</Text>
        <Switch
          value={values.isElectric}
          onChange={() => {
            setFieldValue("isElectric", !values.isElectric);
          }}
        />
      </View>

      <Picker
        selectedValue={values.type}
        onValueChange={(itemValue) => {
          setFieldValue("type", itemValue);
        }}>
        {carTypes.map((ct) => (
          <Picker.Item key={ct.id} label={ct.label} value={ct.value} />
        ))}
      </Picker>
      <Button title="Maak aan" onPress={() => handleSubmit()} />
    </View>
  );
};

export default AddCarScreen;
