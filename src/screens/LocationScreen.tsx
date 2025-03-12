import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  LocationSubscription,
  watchPositionAsync,
} from "expo-location";
import { useIsFocused } from "@react-navigation/native";

const LocationScreen = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [liveLocation, setLiveLocation] = useState<LocationObject>();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (async () => {
        try {
          setLocation(await getCurrentPositionAsync());
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isFocused]);

  useEffect(() => {
    let subscription: LocationSubscription | undefined;

    (async () => {
      try {
        subscription = await watchPositionAsync(
          { accuracy: LocationAccuracy.Lowest },
          (loc) => {
            console.log("LIVE: ", loc);

            setLiveLocation(loc);
          }
        );
      } catch (error) {}
    })();

    return subscription?.remove;
  }, []);

  return (
    <View>
      <Text>LocationScreen</Text>
      <Text>
        {location?.coords.latitude} {location?.coords.longitude}
      </Text>
      <Text>
        {liveLocation?.coords.latitude} {liveLocation?.coords.longitude}
      </Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
