import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class BigTreeThreeDollars extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.green} />
          <View style={[styles.money, { top: 7, right: 30 }]}>
            <Text style={styles.text}>$</Text>
          </View>
          <View style={[styles.money, { top: 60, right: 10 }]}>
            <Text style={styles.text}>$</Text>
          </View>
          <View style={[styles.money, { top: 90, right: 125 }]}>
            <Text style={styles.text}>$</Text>
          </View>
        </View>
        <View style={[styles.wood, { width: 30, height: 60 }]} />
        <View style={[styles.wood, { width: 70, height: 10 }]} />
        <View style={[styles.wood, { width: 30, height: 80 }]} />
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
    width: 180,
    height: 150,
    backgroundColor: 'lawngreen',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  money: {
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: 'yellow',
    position: "absolute",
    alignItems: "center"
  },
  wood: {
    backgroundColor: 'peru'
  },
  ground: {
    width: ScreenWidth, 
    height: 80, 
    backgroundColor: 'saddlebrown', 
    borderTopRightRadius: 200, 
    borderTopLeftRadius: 100
  },
  text: {
    position: "absolute",
    fontSize: 25,
    bottom: 4,
  }
});