/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, MapView } from 'react-native';
import { Container, Header, Icon, Title, Content, Footer, FooterTab, Button, Card, CardItem } from 'native-base';

export default class CardDemo extends Component {
    render() {
        return (
          <Container>
            <Header>
              <Icon name='ios-home' />
            </Header>
            <Content>
              <Card style={{ flex: 0 }}>
                <CardItem>
                   <MapView
                      style={{height: 200, margin: 40}}
                      showsUserLocation={true}/>        
                </CardItem>
                <CardItem cardBody> 
                  <Button block id="yesButton"> YES </Button>
                  <Button block danger id="noButton"> NO </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>
        );
    }
}

AppRegistry.registerComponent('CardDemo', () => CardDemo);
