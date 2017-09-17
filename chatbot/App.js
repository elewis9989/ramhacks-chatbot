import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Home from './Home';
import Chat from './Chat';

export default class App extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key='root' style={{paddingTop: 64}}>
            <Scene key='home' component={Home} title='Home'/>
            <Scene key='chat' component={Chat} title='Chat'/>
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});