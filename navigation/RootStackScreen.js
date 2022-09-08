import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import AddBlogModal from '../screens/AddBlogModal';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}} mode="modal">
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen
        name="CreateNew"
        component={AddBlogModal}
        options={{presentation: 'fullScreenModal'}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
