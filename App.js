import "react-native-gesture-handler";
import React, { useState } from "react";
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
  const [thisTheme, setThisTheme] = useState(theme.light);
  return (
    <Provider store={store}>
      <UnsplashProvider value={unsplashAPI}>
        <ThemeProvider value={thisTheme}>
          <NavigationContainer>
            <AppNavigator
              themeChange={() => {
                setThisTheme(
                  thisTheme === theme.light ? theme.dark : theme.light
                );
              }}
            />
          </NavigationContainer>
        </ThemeProvider>
      </UnsplashProvider>
    </Provider>
  );
};

export default App;
