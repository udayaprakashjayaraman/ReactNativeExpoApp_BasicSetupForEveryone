import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Header from '../JsHelper/Header';
import {Header, Left, Icon} from 'native-base';


export default function App(navigation) {
  return (
    <View style={styles.container}>
      <Text>Landlord dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
