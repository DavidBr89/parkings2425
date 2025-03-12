import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api/parkings";

const ParkingsMapScreen = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
  });

  const mapRef = useRef<MapView>(null);

  return (
    <View className="flex-1">
      <MapView
        onUserLocationChange={(event) => {
          if (event.nativeEvent.coordinate) {
            mapRef.current?.animateToRegion({
              latitude: event.nativeEvent.coordinate.latitude,
              latitudeDelta: 0.45,
              longitude: event.nativeEvent.coordinate.longitude,
              longitudeDelta: 0.5,
            });
          }
        }}
        ref={mapRef}
        style={{ flex: 1 }}
        // initialCamera={{
        //   center: { latitude: 51.05, longitude: 3.7304 },
        //   heading: 0,
        //   pitch: 0,
        // }}
        initialRegion={{
          latitude: 51.05,
          latitudeDelta: 0.45,
          longitude: 3.7304,
          longitudeDelta: 0.5,
        }}>
        {data?.data.results.map((p) => {
          return (
            <Marker
              key={p.id}
              coordinate={{
                latitude: p.location.lat,
                longitude: p.location.lon,
              }}
              title={p.name}
              description={p.availablecapacity.toString()}
            />
          );
        })}

        <Marker coordinate={{ latitude: 51.05, longitude: 3.7304 }} />
      </MapView>
      <Button
        onPress={() => {
          mapRef.current?.animateToRegion({
            latitude: 50.4565,
            latitudeDelta: 0.45,
            longitude: 4.0456,
            longitudeDelta: 0.5,
          });
        }}
        title="Navigeer naar"
      />
    </View>
  );
};

export default ParkingsMapScreen;

const styles = StyleSheet.create({});
