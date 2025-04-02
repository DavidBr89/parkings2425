import { View, Text } from "react-native";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

const DarkModeContextProvider = (props: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

export const useDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw Error(
      "useDarkMode kan enkel gebruikt worden in een <DarkModeContextProvider />"
    );
  }

  return darkModeContext;
};
