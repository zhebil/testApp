import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PhotosScreen from '../screens/PhotosScreen';
import PhotoDetailsScreen from '../screens/PhotoDetailsScreen';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Photos" component={PhotosScreen} />
      <Stack.Screen name="Details" component={PhotoDetailsScreen} />
    </Stack.Navigator>
  );
}
export default AppNavigator;
