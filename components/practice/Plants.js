import React, { Component } from 'react';
import { View, Button, Image } from 'react-native'

export default class Plants extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    // onPress = () => {
    //   // pic.uri = 'https://ak8.picdn.net/shutterstock/videos/14356708/thumb/9.jpg'
    //   console.log('plant')
    // }

    return (
      <View>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        {/* <Button title='Change' onPress={() => { console.log('pressed')}}/> */}
      </View>
    )
  }
}

//When you create an image, you can use a prop named source to control what image it shows.