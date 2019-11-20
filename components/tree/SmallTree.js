import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class SmallTree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.green} />
        <View style={styles.wood} />
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
  green: {
    width: 40, 
    height: 30, 
    backgroundColor: 'lawngreen',
    borderTopLeftRadius: 70, 
    borderTopRightRadius: 70, 
    borderBottomLeftRadius: 70, 
    borderBottomRightRadius: 70
  },
  wood: {
    width: 10, 
    height: 60, 
    backgroundColor: 'peru' 
  },
  ground: {
    width: ScreenWidth, 
    height: 80, 
    backgroundColor: 'saddlebrown', 
    borderTopRightRadius: 200, 
    borderTopLeftRadius: 200
  }
});