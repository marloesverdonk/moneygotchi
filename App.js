import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './components/Home'

export default function App() {
  return (
    <View>
      <ScrollView  >
        <Home/>
      </ScrollView>
    </View>
  );
}

