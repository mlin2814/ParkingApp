import React, { Component } from 'react';
import { MapView } from 'react-native';
import { Container, Content, Card, MapView, Button } from 'native-base';
​
export default MapMyRide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                               <MapView
                               style={{height: 200, margin: 40}}
                                showsUserLocation={true}/>
                            
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