import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Dimensions, Text } from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onLogin() {
    // const { email, password } = this.state;
    console.log(this.props)
    // Alert.alert('Credentials', `${email} + ${password}`);
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
        
        <Button
          title={'Submit'}
          style={styles.input}
          onPress={() => {this.onLogin()}}
        />
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
});