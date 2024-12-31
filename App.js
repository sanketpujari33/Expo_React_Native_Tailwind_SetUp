import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Count from './src/components/Count';
import "./global.css";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center bg-blue-500">
        <Text className="text-white text-4xl font-bold">Hello, Tailwind CSS!</Text>
        <StatusBar style="auto" />
        <Count />
      </View>
    </Provider>
  );
}
