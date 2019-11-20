import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class SmallTree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ground} />
        <View style={styles.money}>
          <Text style={styles.text}>$</Text>
        </View>
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
  },
  money: {
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: 'yellow',
    position: "absolute",
    top: -20,
    alignItems: "center"
  },
  text: {
    //position: "absolute", 
    bottom: -3,
    fontSize: 25,
  }
});