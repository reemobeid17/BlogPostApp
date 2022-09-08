import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStackScreen from './navigation/RootStackScreen';
import GlobalProvider from './context/GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
