import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './src/functions/Screen';
import Book from './src/pages/Book';
import Folder from './src/pages/Folder';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Screen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363636',
  },
});
