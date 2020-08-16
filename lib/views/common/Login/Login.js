/**
 * Created By Sanchit Dang 
 * Date : 11/07/2020
 */

import React, { useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { View, Card, Item, CardItem, Input, Container, Button, Text } from 'native-base';


const loginStyleSheet = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    loginFormContainer: {
        marginHorizontal: 40,

    }
});


const Login = props => {

    const emailBox = useRef();
    const passwordBox = useRef();

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <Container style={loginStyleSheet.root}>
                <View style={loginStyleSheet.loginFormContainer}>
                    <Card style={{
                        padding: 15,
                        alignItems: 'center',
                    }} >
                        <CardItem>
                            <Text style={{ fontWeight: "bold" }} >
                                Login
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Item regular>
                                <Input getRef={input => {
                                    emailBox = input;
                                }} placeholder='Email' keyboardType="email-address" returnKeyType="next"
                                    onSubmitEditing={() => {
                                        passwordBox.current.focus();
                                    }}
                                />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item regular>
                                <Input getRef={input => {
                                    passwordBox = input;
                                }}
                                    placeholder='Password' secureTextEntry={true} />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Button onPress={() => {
                                props.navigation.replace("Home")
                            }} style={{ width: "100%", justifyContent: "center" }}>
                                <Text>
                                    Login
                                </Text>
                            </Button>
                        </CardItem>
                    </Card>
                </View>
            </Container>
        </TouchableWithoutFeedback>

    );
};

export default Login;

