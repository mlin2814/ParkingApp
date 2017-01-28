import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import MapView from 'react-native-maps';
import flagBlueImg from './assets/flag-blue.png';
import flagPinkImg from './assets/flag-pink.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
let id = 0;

let openSpots = 0;
let lng = 0;
let lat = 0;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker1: true,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

 

  onMapPress(e) {
  
    console.log(e.nativeEvent.coordinate);
    lng = e.nativeEvent.coordinate.longitude;
    lat = e.nativeEvent.coordinate.latitude;

    this.saveData(1);

    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          marker1: true,
         openSpots: 0,
        }, 
      ],
    });
  }



saveData(openspots) {

  fetch('https://parkingserver.herokuapp.com/api/markers/', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         username: 'rfahey', //hard coded username until we set up authentication
         longitude: lng,
         latitude: lat,
         multiplespots: openspots
      })
    })
  openSpots: 0;  //reset
}


  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={(e) => this.onMapPress(e)}
        >

          {this.state.markers.map((marker, index) => (
          <MapView.Marker 
            key={marker.key}
            onPress={() => {
              const marker = this.state.markers[index]
              marker.marker1 = !marker.marker1
              this.setState({ markers: [
                  ...this.state.markers.slice(0, index),
                  marker,
                  ...this.state.markers.slice(index + 1)
              ]})}
            }
            coordinate={marker.coordinate}         
            image={marker.marker1 ? flagBlueImg : flagPinkImg}
          >
          </MapView.Marker>
          ))}
        </MapView>
        <View style={[styles.box, {padding: 2}]}>
            <Text style={{fontSize: 22}}>Are there 3+ OPEN spots?</Text>
            <View style={{flexDirection: 'row', height: 50, padding: 10, justifyContent: 'space-between'}}>
              <View style={{backgroundColor: '#6495ed', width: 100}}>
                  <Text style={{fontSize: 18, textAlign: 'center'}}>YES</Text>
              </View>
              <View style={{backgroundColor: '#dc143c', width: 100}}>
                  <Text style={{fontSize: 18, textAlign: 'center'}}>NO</Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

Marker.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#527FE4',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#fffaf0',
    borderColor: '#000033',
    borderWidth: 1,
  },
});

module.exports = Marker;
