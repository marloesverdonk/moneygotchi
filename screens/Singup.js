import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Dimensions, Text } from 'react-native';
import { url } from '../constants'

export default class Signup extends Component {
state = {
      email: '',
      password: '',
    };
  
  
  onSignup = () => {
    // return fetch(`${url}/signup`, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if(response.status === 'ok')
    //     this.props.navigation.navigate('Login')
    //     else alert('Provide valid email and password!')
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    this.props.navigation.navigate('Login')
  }

  render() {
    console.log('props', this.props)
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <View style={styles.container}>
        
        <TextInput
          value={this.state.username}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <View style={styles.buttonContainer}>
              <Button
                title={'Submit'}
                style={styles.input}
                onPress={() => { this.onSignup() }}
                color='white'
              />
              </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  text: {
    marginTop: 36,
    flexDirection: 'column',
    color: 'teal',
    fontSize: 40,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start',
    textAlign: 'center'
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: 'darkslategrey'
  },
});