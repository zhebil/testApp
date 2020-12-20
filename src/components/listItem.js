import React, {useContext} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext';
import { transformText } from '../utility';

 function ListItem({item, navigation}) {
  const { id,
    alt_description,
    urls: {thumb},
    user: {name},
  } = item;
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);
 
  const onPress= ()=> {
    navigation.navigate('Details', {
      id: id
    })
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <Image
          style={styles.image}
          onPress
          source={{
            uri: thumb,
          }}
        />
      </TouchableHighlight>
      <View style={styles.description}>
        <Text  style={{...styles.text, ...styles.name}}>{name}</Text>
        <Text style={{...styles.text, ...styles.altText}}>
          {transformText(alt_description)}
        </Text>
      </View>
    </ScrollView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 5,
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: theme.backgroundContrast,
    },
    image: {
      width: 100,
      height: 100,
      flex: 1
    },
    description: {
      flex: 3
    },
    text: {
      color: theme.color,
      paddingLeft: 10,
      paddingRight: 10,
      
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    altText: {
      fontSize: 16,
    },
  });


  export default ListItem