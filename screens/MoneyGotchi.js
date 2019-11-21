import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import BigTree from '../components/tree/BigTree'
import MediumTree from '../components/tree/MediumTree';
import SmallTree from '../components/tree/SmallTree';
import NoTree from '../components/tree/NoTree'
import Seeding from '../components/tree/Seeding'
import Nursing from '../components/nursing/Nursing'

export default class MoneyGotchi extends React.Component {
  state = {
    showNoTree: false,
    showSeeding: false,
    showSmallTree: false,
    showMediumTree: true,
    showBigTree: false
  }

  hideAll = () => {
    this.setState({
      showNoTree: false,
      showSeeding: false,
      showSmallTree: false,
      showMediumTree: false,
      showBigTree: false
    })
  }

  ShowStage = (stage) => {
    this.hideAll()
    this.setState({
      [stage]: true,

    })
  }



  render() {
    return (
      <View style={styles.container}>
          <Button
          title={'Highscores'}
          onPress={() => this.props.navigation.navigate('HighScores')}
        />
        <Text style={styles.text}>MONEYGOTCHI</Text>
        
        {/* <View {...this.props} style={[styles.heart, this.props.style]}>
          <View style={styles.leftHeart} />
          <View style={styles.rightHeart} />
        </View> */}
        
        {/* <View style={styles.money}/> */}




        <Nursing style={styles.nursing} />
        <View style={styles.bottom} >
          {this.state.showNoTree
            ? < TouchableOpacity onPress={() => { this.ShowStage('showSeeding') }}><NoTree /></TouchableOpacity>
            : this.state.showSeeding
              ? < TouchableOpacity onPress={() => { this.ShowStage('showSmallTree') }}><Seeding /></TouchableOpacity>
              : this.state.showSmallTree
                ? < TouchableOpacity onPress={() => { this.ShowStage('showMediumTree') }}><SmallTree /></TouchableOpacity>
                : this.state.showMediumTree
                  ? < TouchableOpacity onPress={() => { this.ShowStage('showBigTree') }}><MediumTree /></TouchableOpacity>
                  : this.state.showBigTree
                    ? < TouchableOpacity onPress={() => { this.ShowStage('showNoTree') }}><BigTree /></TouchableOpacity>
                    : <Button title='Start' onPress={() => { this.ShowStage('showNoTree') }} />}
        </View>

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
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 1
  },
  nursing: {
    // flexDirection: "row",
    // flex: 1,
    // justifyContent: "flex-end",

  },
  heart: {
    flex: 1,
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
    backgroundColor: '#6427d1',
  },
  leftHeart: {
    transform: [
        {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [
        {rotate: '45deg'}
    ],
    right: 5
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
});