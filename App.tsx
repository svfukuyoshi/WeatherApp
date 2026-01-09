
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './src/navigation/AppNavigator';

// Enable native screens for better performance and to avoid rnsscreenstack error
enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* StatusBar for clean UI */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Navigation container wraps the app navigator */}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
