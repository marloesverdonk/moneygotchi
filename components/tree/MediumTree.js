import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class MediumTree extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.green} />
            <View style={[styles.money, {top: 20, right: 40}]} />
            <View style={[styles.money, {top: 10, left: 40}]} />
          </View>
        <View style={[styles.wood, {width: 15, height: 40}]} />
        <View style={[styles.wood, {width: 45, height: 7}]} />
        <View style={[styles.wood, {width: 15, height: 60}]} />
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
    width: 100, 
    height: 70, 
    backgroundColor: 'lawngreen',
    borderTopLeftRadius: 70, 
    borderTopRightRadius: 70, 
    borderBottomLeftRadius: 70, 
    borderBottomRightRadius: 70
  },
  money: {
    width: 10, 
    height: 10, 
    borderRadius: 100 / 2, 
    backgroundColor: 'yellow', 
    position: "absolute", 
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
  }

});