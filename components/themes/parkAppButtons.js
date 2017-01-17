import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class YesNoButton extends Component {
    render() {
        return (
            <Container>
                <Content>
                <Text>ARE THERE MORE THAN 3 FREE PARKING SPACES NEAR YOU? </Text>
                    <Button block id="yesButton"> YES </Button>
                    <Button block danger id="noButton"> NO </Button>
                </Content>
            </Container>
        );
    }
}