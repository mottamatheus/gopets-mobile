import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#fff5ee" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#fff5ee' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
