import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="HomeScreen">
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{title: 'Blogs'}}
    />
    <HomeStack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={{title: 'Details'}}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
