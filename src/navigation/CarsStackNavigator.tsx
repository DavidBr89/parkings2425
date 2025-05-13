import { createStackNavigator } from "@react-navigation/stack";
import { CarssStackParamsList } from "./types";
import CarsScreen from "../screens/Cars/CarsScreen";
import AddCarScreen from "../screens/Cars/AddCarScreen";
import UpdateCarScreen from "../screens/Cars/UpdateCarScreen";

const CarsStack = createStackNavigator<CarssStackParamsList>();

const CarsStackNavigator = () => {
  return (
    <CarsStack.Navigator>
      <CarsStack.Screen name="Cars" component={CarsScreen} />
      <CarsStack.Screen name="AddCar" component={AddCarScreen} />
      <CarsStack.Screen name="UpdateCar" component={UpdateCarScreen} />
    </CarsStack.Navigator>
  );
};

export default CarsStackNavigator;
