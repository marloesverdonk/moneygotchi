import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MoneyGotchi from './screens/MoneyGotchi'
import Login from './screens/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView  >
        {/* <MoneyGotchi/> */}
        <Login />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
