import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Nursing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.money}>
          <Text style={styles.text}>$</Text>
          <Text style={[styles.text, { right: -30 }]}>1x</Text>
        </View>
        <View style={styles.heart}>
          <View style={styles.leftHeart} />
          <View style={styles.rightHeart} />
          <Text style={[styles.text, { right: -30 }]}>1x</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: "center"
    padding: 8,
    backgroundColor: "pink",
    position: 'absolute',
    right: 0,
    top: 200,
    width: 100

  },
  money: {
    flex: 1,
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: 'yellow',
    margin: 2
  },
  text: {
    position: "absolute",
    fontSize: 25,
    right: 12,
    top: 4
  },
  heart: {
    width: 50,
    height: 50
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'red',
  },
  leftHeart: {
    transform: [
      { rotate: '-45deg' }
    ],
    left: 5
  },
  rightHeart: {
    transform: [
      { rotate: '45deg' }
    ],
    right: 5
  }
});