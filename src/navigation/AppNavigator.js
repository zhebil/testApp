import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PhotosScreen from "../screens/PhotosScreen";
import PhotoDetailsScreen from "../screens/PhotoDetailsScreen";
import { ThemeContext } from "../context/themeContext";
import { Button, Platform } from "react-native";

const Stack = createStackNavigator();
function AppNavigator({themeChange}) {
  const theme = React.useContext(ThemeContext);
  const getOptions = function (title) {
    return {
      title: title,
      headerStyle: {
        backgroundColor: theme.backgroundColor,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
      },
      headerTintColor: "#fff",

      headerRight: () => (
        <Button
          title={theme.title}
          color={theme.backgroundContrast}
          onPress={themeChange}
        />
      ),
    };
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        options={getOptions("Все фото")}
      />
      <Stack.Screen
        name="Details"
        component={PhotoDetailsScreen}
        options={getOptions("Фото")}
      />
    </Stack.Navigator>
  );
}
export default AppNavigator;
