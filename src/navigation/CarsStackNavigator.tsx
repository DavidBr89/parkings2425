import { createStackNavigator } from "@react-navigation/stack";
import {
  CarssStackParamsList,
  CarsStackNavProps,
  ParkingsStackNavProps,
  ParkingsTabNavProps,
} from "./types";
import CarsScreen from "../screens/Cars/CarsScreen";
import AddCarScreen from "../screens/Cars/AddCarScreen";
import UpdateCarScreen from "../screens/Cars/UpdateCarScreen";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CarsStack = createStackNavigator<CarssStackParamsList>();

const CarsStackNavigator = () => {
  const navigation =
    useNavigation<ParkingsTabNavProps<"CarsStack">["navigation"]>();

  return (
    <CarsStack.Navigator>
      <CarsStack.Screen
        name="Cars"
        component={CarsScreen}
        options={{
          headerRight: (props) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CarsStack", { screen: "AddCar" });
                }}>
                <MaterialCommunityIcons
                  name="plus"
                  size={28}
                  color={props.tintColor}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <CarsStack.Screen name="AddCar" component={AddCarScreen} />
      <CarsStack.Screen name="UpdateCar" component={UpdateCarScreen} />
    </CarsStack.Navigator>
  );
};

export default CarsStackNavigator;
