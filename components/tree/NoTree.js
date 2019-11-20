import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class NoTree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ground} />
      </View>
    );
  }
}

let ScreenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: "center"
  },
  ground: {
    width: ScreenWidth, 
    height: 80, 
    backgroundColor: 'saddlebrown', 
    borderTopRightRadius: 200, 
    borderTopLeftRadius: 200
  }
});