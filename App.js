import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './store'

//Screens
import MoneyGotchi from './screens/MoneyGotchi'
import Login from './screens/Login'
import Signup from './screens/Singup'
import HighScores from './screens/HighScores'

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
        <Text style={styles.text}>Moneygotchi</Text>
      
        </View>
      <View style={styles.container}>
        
        
        <View style={styles.buttonContainer }>
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
          color='white'
        />
        </View>
        <View style={styles.buttonContainer }>
         <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
          color='white'
        />
        </View>
      </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MoneyGotchi: MoneyGotchi,
    Login: Login,
    Signup: Signup,
    HighScores: HighScores
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer/>
      </Provider>
    );
  }
}

let ScreenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: ScreenHeight,
   flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  text: {
    marginTop: 36,
    flexDirection: 'column',
    color: 'teal',
    fontSize: 40,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: 'darkslategrey'
  },

});
