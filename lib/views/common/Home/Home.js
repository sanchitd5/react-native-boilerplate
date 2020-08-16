/**
 * Created By Sanchit Dang 
 * Date : 11/07/2020
 */

import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { View, Container, Text, Button } from 'native-base';


const homeStyleSheet = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    container: {
        marginHorizontal: 40,

    }
});


const Home = props => {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <Container style={homeStyleSheet.root}>
                <View style={homeStyleSheet.container}>
                    <Button onPress={() => { props.navigation.replace("Login") }}>
                        <Text>
                            Logout
                        </Text>
                    </Button>
                </View>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default Home;

