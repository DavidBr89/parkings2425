import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export type ParkingsStackParamsList = {
  Home: undefined;
  Details: { url: string };
};

export type AuthStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export type CarssStackParamsList = {
  Cars: undefined;
  AddCar: undefined;
  UpdateCar: { carId: string };
};

export type ParkingsTabParamsList = {
  HomeStack: undefined;
  Map: undefined;
  SettingsDrawer: undefined;
  Favorites: undefined;
  CarsStack: { screen: keyof CarssStackParamsList } | undefined;
};

export type ParkingsDrawerParamsList = {
  Native: undefined;
  Location: undefined;
  Counter: undefined;
};

export type ParkingsStackNavProps<T extends keyof ParkingsStackParamsList> =
  StackScreenProps<ParkingsStackParamsList, T>;

export type CarsStackNavProps<T extends keyof CarssStackParamsList> =
  StackScreenProps<CarssStackParamsList, T>;

export type AuthStackNavProps<T extends keyof AuthStackParamsList> =
  StackScreenProps<AuthStackParamsList, T>;

export type ProductsStackNavProps<T extends keyof CarssStackParamsList> =
  StackScreenProps<CarssStackParamsList, T>;

export type ParkingsTabNavProps<T extends keyof ParkingsTabParamsList> =
  BottomTabScreenProps<ParkingsTabParamsList, T>;

export type ParkingsDrawerNavProps<T extends keyof ParkingsDrawerParamsList> =
  DrawerScreenProps<ParkingsDrawerParamsList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends ParkingsStackParamsList,
        AuthStackParamsList,
        CarssStackParamsList,
        ParkingsTabParamsList,
        ParkingsDrawerParamsList {}
  }
}
