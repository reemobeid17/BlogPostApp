import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const FavoriteStack = createNativeStackNavigator();

const FavoriteStackScreen = () => (
  <FavoriteStack.Navigator initialRouteName="HomeScreen">
    <FavoriteStack.Screen name="FavoriteScreen" options={{title: 'Favorites'}}>
      {props => <HomeScreen {...props} favoriteScreen />}
    </FavoriteStack.Screen>
    <FavoriteStack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={{title: 'Details'}}
    />
  </FavoriteStack.Navigator>
);

export default FavoriteStackScreen;
