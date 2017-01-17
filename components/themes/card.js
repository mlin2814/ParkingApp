import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button } from 'native-base';
​
export default class CardShowcaseExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('./img/NB-logo.png')} />
                            
                        </CardItem>

                        <CardItem cardBody> 
                             
                            
                    
                            <Text>ARE THERE MORE THAN 3 FREE PARKING SPACES NEAR YOU? </Text>
                    <Button block id="yesButton"> YES </Button>
                    <Button block danger id="noButton"> NO </Button>
                            </Button>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}