import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator initialRouteName="ProfileScreen">
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{title: 'Profile'}}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
