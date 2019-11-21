import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import BigTree from '../components/tree/BigTree'
import MediumTree from '../components/tree/MediumTree';
import SmallTree from '../components/tree/SmallTree';
import NoTree from '../components/tree/NoTree'
import Seeding from '../components/tree/Seeding'
import Harvest from '../components/tree/Harvest'
import BigTreeOneDollar from '../components/tree/BigTreeOneDollar'
import BigTreeThreeDollars from '../components/tree/BigTreeThreeDollars'

export default class MoneyGotchi extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds - 1
      })
    }, 1000)
  }

  state = {
    showNoTree: true,
    showSeeding: false,
    showSmallTree: false,
    showMediumTree: false,
    showBigTree: false,
    showHarvest: false,
    showBigTreeOneDollar: false,
    showBigTreeThreeDollars: false,
    dollars: 1,
    love: 2,
    water: 2,
    seconds: 3,

  }

  hideAll = () => {
    this.setState({
      showNoTree: false,
      showSeeding: false,
      showSmallTree: false,
      showMediumTree: false,
      showBigTree: false,
      showHarvest: false,
      showBigTreeOneDollar: false,
      showBigTreeThreeDollars: false,

    })
  }

  ShowStage = (stage) => {
    this.hideAll()
    this.setState({
      [stage]: true,
    })
  }

  onDollar = () => {
    if (this.state.dollars >= 0 && this.state.showNoTree === true) {
      this.setState({
        dollars: this.state.dollars - 1
      })
      this.ShowStage('showSeeding')
    }
  }

  onLove = () => {
    if (!this.state.showNoTree && !this.state.showBigTree) {
      this.setState({
        love: this.state.love + 1
      })
      this.goToNextStageLove()
    }
  }

  onWater = () => {
    if (!this.state.showNoTree && !this.state.showBigTree) {
      this.setState({
        water: this.state.water + 1
      })
      this.goToNextStageWater()
    }
  }

  nextStage = () => {
    return (
      this.state.showNoTree
        ? 'showSeeding'
        : this.state.showSeeding
          ? 'showSmallTree'
          : this.state.showSmallTree
            ? 'showMediumTree'
            : this.state.showMediumTree
              ? 'showBigTreeOneDollar'
              : this.state.showBigTreeOneDollar
                ? 'showBigTreeThreeDollars'
                : this.state.showBigTreeThreeDollars
                  ? 'showBigTree'
                  : this.state.showBigTree
                    ? 'showHarvest'
                    : this.state.showHarvest
                      ? 'showBigTreeOneDollar'
                      : ''
    )
  }

  goToNextStageWater = () => {
    const nextStage = this.nextStage()
    if (this.state.water >= 2 && this.state.love >= 3) {
      this.setState({
        water: 1,
        love: 1
      })
      this.ShowStage(nextStage)
    }
  }

  goToNextStageLove = () => {
    const nextStage = this.nextStage()
    if (this.state.love >= 2 && this.state.water >= 3) {
      this.setState({
        water: 1,
        love: 1
      })
      this.ShowStage(nextStage)
    }
  }

  getMoney = () => {
    const nextStage = this.nextStage()
    if (this.state.showBigTree === true) {
      this.setState({
        water: 1,
        love: 1,
        dollars: this.state.dollars + 5
      })
      this.ShowStage(nextStage)
    }
    if (this.state.showBigTreeOneDollar === true) {
      this.setState({
        water: 1,
        love: 1,
        dollars: this.state.dollars + 1
      })
      this.ShowStage('showHarvest')
    }
    if (this.state.showBigTreeThreeDollars === true) {
      this.setState({
        water: 1,
        love: 1,
        dollars: this.state.dollars + 3
      })
      this.ShowStage('showHarvest')
    }
  }


  //   renderTimeButton = () => {
  //     return (
  //       <Button
  //         title="Timer"
  //         onPress={this.onTimer}
  //       />
  //    )
  // }


  //   onTimer = () => {
  //    setInterval(() => {
  //       this.setState({
  //         seconds: this.state.seconds -1
  //       })
  //     }, 1000)
  //   }


  render() {
    return (
      <View style={styles.container}>
        {/* <Button
          title={'Highscores'}
          onPress={() => this.props.navigation.navigate('HighScores')}
        /> */}
        <Text style={styles.text}>MONEYGOTCHI</Text>

        {/* <View {...this.props} style={[styles.heart, this.props.style]}>
          <View style={styles.leftHeart} />
          <View style={styles.rightHeart} />
        </View> */}

        {/* <View style={styles.money}/> */}


        <View style={styles.bar}>
          <Text>Dollars:{this.state.dollars}</Text>
          {/* <TouchableOpacity onPress={() => { this.onLove() }}><Text>Love bar:{this.state.love}</Text></TouchableOpacity> */}
          <Text>Love bar:{this.state.love}</Text>
          <Text>Water bar:{this.state.water}</Text>
          <Text>Count down:{this.state.seconds}</Text>
        </View>

        <View style={styles.bar}>
          <Button title='Get money' onPress={() => { this.getMoney() }} />
          <Button title='Love' onPress={() => { this.onLove() }} />
          <Button title='Water' onPress={() => { this.onWater() }} />
          {/* {this.renderTimeButton()} */}
        </View>


        <View style={styles.bottom} >
          {this.state.showNoTree
            ? < View><Button title='Plant a tree' onPress={() => { this.onDollar() }} /><NoTree /></View>
            : this.state.showSeeding
              ? < View><Seeding /></View>
              : this.state.showSmallTree
                ? < View><SmallTree /></View>
                : this.state.showMediumTree
                  ? < View><MediumTree /></View>
                  : this.state.showBigTree
                    ? < View><BigTree /></View>
                    : this.state.showBigTreeOneDollar
                      ? < View><BigTreeOneDollar /></View>
                      : this.state.showBigTreeThreeDollars
                        ? < View><BigTreeThreeDollars /></View>
                        : this.state.showHarvest
                          ? < View><Harvest /></View>
                          : <Button title='New Tree' onPress={() => { this.ShowStage('showNoTree') }} />}
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
  bar: {
    flexDirection: "row"
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
      { rotate: '-45deg' }
    ],
    left: 5
  },
  rightHeart: {
    transform: [
      { rotate: '45deg' }
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