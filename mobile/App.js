import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Screen from './src/functions/Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Book" component={Book} />
    //     <Tab.Screen name="Folder" component={Folder} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Folder" component={Folder} />
    //     <Stack.Screen name="Logins" component={Logins} />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
