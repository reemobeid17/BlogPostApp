import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeStackScreen';
import FavoriteStackScreen from './FavoriteStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import AddBlogModal from '../screens/AddBlogModal';
import HomeIcon from '../assets/icons/home.png';
import FavoriteIcon from '../assets/icons/favorite.png';
import PlusIcon from '../assets/icons/plus.png';
import ProfileIcon from '../assets/icons/profile.png';
import SettingsIcon from '../assets/icons/settings.png';

const Tab = createBottomTabNavigator();

const AddIcon = ({children, onPress}) => {
  return (
    <TouchableOpacity style={[styles.addIcon, styles.shadow]} onPress={onPress}>
      <View style={{width: 70, height: 70}}>{children}</View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: [styles.position, styles.shadow],
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={HomeIcon}
                resizeMode="contain"
                style={{...styles.icon, tintColor: focused ? '#000' : '#ddd'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={FavoriteIcon}
                resizeMode="contain"
                style={{...styles.icon, tintColor: focused ? '#000' : '#ddd'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddBlogTab"
        component={AddBlogModal}
        options={{
          tabBarIcon: () => (
            <Image source={PlusIcon} style={{width: 70, height: 70}} />
          ),
          tabBarButton: props => <AddIcon {...props} />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('CreateNew');
          },
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={ProfileIcon}
                resizeMode="contain"
                style={{...styles.icon, tintColor: focused ? '#000' : '#ddd'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={SettingsIcon}
                resizeMode="contain"
                style={{...styles.icon, tintColor: focused ? '#000' : '#ddd'}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    left: 20,
    elevation: 0,
    borderRadius: 15,
    height: 60,
  },
  shadow: {
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addIcon: {
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default Tabs;
