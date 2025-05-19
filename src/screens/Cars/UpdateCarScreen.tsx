import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { CarsStackNavProps } from "@/src/navigation/types";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/src/config/firebase";

const UpdateCarScreen = () => {
  const {
    params: { carId },
  } = useRoute<CarsStackNavProps<"UpdateCar">["route"]>();

  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const docRef = doc(db, "cars", carId);
        const docSnap = await getDoc(docRef);

        setCar({ id: docSnap.id, ...docSnap.data() } as Car);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [carId]);

  return (
    <View>
      <Text>{JSON.stringify(car)}</Text>
      <Button
        title="Update auto"
        onPress={async () => {
          try {
            const docRef = doc(db, "cars", carId);
            await updateDoc(docRef, { ...car, color: "blue" });
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </View>
  );
};

export default UpdateCarScreen;
