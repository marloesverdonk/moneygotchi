import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';


export default class HighScores extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HighScores</Text>
        
        {/* <View {...this.props} style={[styles.heart, this.props.style]}>
          <View style={styles.leftHeart} />
          <View style={styles.rightHeart} />
        </View> */}
        
        {/* <View style={styles.money}/> */}




       
        </View>

      
    );
  }
}




let ScreenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    top: 0,
    bottom: 0
    // justifyContent: 'center',
  },
  text: {
    marginTop: 36,
    color: 'teal',
    fontSize: 40,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start'
  },
});