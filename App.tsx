import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import AppNavigator from './src/Navigation/AppNavigator';

const App = () => {
  return (
    // Wrap AppNavigator inside GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
