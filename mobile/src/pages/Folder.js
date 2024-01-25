import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Tabs from '../functions/Tabs';

export default function Folder() {
  const Screen = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => Screen.navigate('Logins')}>
        <Text>Acessar Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({})