import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Tabs from '../functions/Tabs';


export default function Folder() {
  const Screen = useNavigation();
  return (
    <View style={styles.Feed}>
      <TouchableOpacity onPress={() => Screen.navigate('Logins')}>
        <Text>Acessar Login</Text>
      </TouchableOpacity>
    </View>
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
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

})