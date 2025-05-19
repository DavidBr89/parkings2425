import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  where,
} from "firebase/firestore";
import { db } from "@/src/config/firebase";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteApp } from "firebase/app";
import { CarsStackNavProps } from "@/src/navigation/types";

const CarsScreen = () => {
  const navigation = useNavigation<CarsStackNavProps<"Cars">["navigation"]>();

  const isFocused = useIsFocused();

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    if (isFocused) {
      (async () => {
        try {
          // Data opvragen
          // 1ste manier - document met specifiek id opvragen

          // const carDocRef = doc(db, "cars", "1-abc-123");

          // const docSnap = await getDoc(carDocRef);
          // const car = { ...docSnap.data(), id: docSnap.id } as Car;

          // console.log(car);

          // 2de manier - alle documenten vanuit de collection opvragen

          const q = query(
            collection(db, "cars"),
            // where("isElectric", "==", false),
            orderBy("type", "desc")
          );
          // const qs = await getDocs(q);

          // setCars(qs.docs.map((ds) => ({ ...ds.data(), id: ds.id } as Car)));

          // 3de manier - Realtime updates ontvangen van de collection
          unsubscribe = onSnapshot(q, (qs) => {
            setCars(qs.docs.map((ds) => ({ ...ds.data(), id: ds.id } as Car)));
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [isFocused]);

  return (
    <View className="flex-1">
      <FlatList
        data={cars}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UpdateCar", { carId: item.id });
              }}
              className="p-4 flex flex-row justify-between items-center">
              <View>
                <Text className="font-bold uppercase text-red-800">
                  {item.licensePlate}
                </Text>
                <Text className="font-thin uppercase">{item.type}</Text>
              </View>
              <MaterialCommunityIcons
                name={item.isElectric ? "lightning-bolt" : "fuel"}
                size={32}
                color="#a93737"
              />
              <TouchableOpacity
                onPress={async () => {
                  const docRef = doc(db, "cars", item.id);
                  try {
                    await deleteDoc(docRef);
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                <MaterialCommunityIcons
                  name="trash-can"
                  color="red"
                  size={28}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Text>CarsScreen</Text>
    </View>
  );
};

export default CarsScreen;
