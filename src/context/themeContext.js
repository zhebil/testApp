import React from 'react';

const ThemeContext = React.createContext();
const {Provider: ThemeProvider, Consumer: ThemeConsumer} = ThemeContext;
export {ThemeContext, ThemeProvider, ThemeConsumer};
