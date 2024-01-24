import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logins from './src/pages/Logins';
import Folder from './src/pages/Folder';
import Screen from './src/functions/Screen';


export default function App() {

  return (
    <View style={styles.container}>
      <Logins />
      <StatusBar style="auto" />
    </View>
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
