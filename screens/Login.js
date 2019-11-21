import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Dimensions, Text } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log('con props', props)
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onLogin() {
    // const { email, password } = this.state;
    // Alert.alert('Credentials', `${email} + ${password}`);
    this.props.navigation.navigate('MoneyGotchi')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
          title={'Login'}
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