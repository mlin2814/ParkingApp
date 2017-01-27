import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class MapTest extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('MapTest', () => MapTest);
