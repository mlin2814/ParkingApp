/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): React.Element<any> {
      return <ParkingApp />;
    },
  }
];

class ParkingApp extends React.Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };


  watchID: ?number = null;

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        //create array getCoords
        var getCoords = [position.coords.longitude,position.coords.latitude];
        console.log(getCoords);
        
        var initialPosition = getCoords.toString();
        this.setState({initialPosition:initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    ); 
      this.watchID = navigator.geolocation.watchPosition((position) => {
        var getCoords = [position.coords.longitude,position.coords.latitude];
        console.log(getCoords);
        
        var lastPosition = getCoords.toString();
        this.setState({lastPosition:lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});

AppRegistry.registerComponent('ParkingApp', () => ParkingApp);
