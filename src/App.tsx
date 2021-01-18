import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#154786" />
    <View style={{ flex: 1, backgroundColor: '#154786' }}>
      <Text>oiaa</Text>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
