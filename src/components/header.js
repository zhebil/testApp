import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { ThemeContext } from '../context/themeContext';

export default function Header() {
  const theme = useContext(ThemeContext);
 const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unsplash Photo</Text>
      <Button 
      title={theme.title} 
      style={styles.button} />
    </View>
  );
}
const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      height: 70,
      backgroundColor: theme.backgroundColor,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 15,
    },
    title: {
      color: theme.color,
      fontSize: 24,
    },
    button: {
      backgroundColor: theme.buttonColor,
    },
  });
