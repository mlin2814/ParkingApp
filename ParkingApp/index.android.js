import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class ParkingApp extends Component {

    state = {
        initialLong:0,
        initialLat:0,
        lastLong: '',
        lastLat: ''
    };

    watchID: ?number = null;

    componentDidMount() {
      console.log('here')
      navigator.geolocation.getCurrentPosition(
        (position) => {
        const long = parseInt(position.coords.longitude);
        const lat = parseInt(position.coords.latitude);
      
      this.setState({initialLong:long});
      this.setState({initialLat:lat});
     
      //         console.log(this.state.initialLat);
      // console.log(this.state.initialLong);



        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
      ); 
      this.watchID = navigator.geolocation.watchPosition((position) => {
        // this.state({lastLong:position.coords.longitude});
        // this.state({lastLat:position.coords.latitude});
        this.setState({lastLong:position.coords.longitude});
      this.setState({lastLat:position.coords.latitude});
      });
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }
componentDidUpdate(){
  console.log("this is long state", this.state.initialLong)
}
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
             latitude:this.state.initialLat,
             longitude:this.state.initialLong,
             latitudeDelta:0.05,
             longitudeDelta: 0.05,
          }}
        >
        </MapView>
      </View>
    );
  }
}

AppRegistry.registerComponent('ParkingApp', () => ParkingApp);