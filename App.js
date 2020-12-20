import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import UnsplashAPI from "./src/API/unsplashAPI";
import store from "./store";
import AppNavigator from "./src/navigation/AppNavigator";
import theme from "./src/theme";
import { UnsplashProvider } from "./src/context/unsplashContext";
import { ThemeProvider } from "./src/context/themeContext";
const unsplashAPI = new UnsplashAPI();
const App = () => {
  return (
    <Provider store={store}>
      <UnsplashProvider value={unsplashAPI}>
        <ThemeProvider value={theme.light}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </UnsplashProvider>
    </Provider>
  );
};

export default App;
