import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Soma from '../functions/Soma'

export default function Folder() {
  return (
    <View style={styles.container}>
      <Soma Val1={2} Val2={3} />
    </View>
  );
}
const styles = StyleSheet.create({})