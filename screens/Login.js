import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Dimensions, Text } from 'react-native';
import * as request from 'superagent'
import { url } from '../constants'
import { login } from '../actions/auth'
import { connect } from "react-redux";


class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onLogin = () => {
    // const { email, password } = this.state;
    // Alert.alert('Credentials', `${email} + ${password}`);
    //this.props.navigation.navigate('MoneyGotchi')

    // request.post(`${url}`)
    //   .send(JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   }))
    //   .then(result => console.log(result.body.jwt))
    //   .catch(console.error)
    // this.setState({
    //   email: "",
    //   password: ""
    // })

    // return fetch(`${url}/login`, {
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
    //     this.props.navigation.navigate('MoneyGotchi')
    //     // if(response.jwt)
    //     // this.props.navigation.navigate('MoneyGotchi')
    //     // else alert('Wrong email or password!')
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })

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
              <View style={styles.buttonContainer}>
              <Button
                title={'Login'}
                style={styles.input}
                onPress={() => { this.onLogin() }}
                color='white'
              />
              </View>
            </View>
          </View>
    ) 
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

const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);