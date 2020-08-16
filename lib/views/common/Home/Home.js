import React, {useContext} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {View, Container, Text, Button} from 'native-base';
import {LoginContext} from '../../../contexts';

const homeStyleSheet = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 40,
  },
});

const Home = (props) => {
  const {setAccessToken, accessToken} = useContext(LoginContext);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container style={homeStyleSheet.root}>
        <View style={homeStyleSheet.container}>
          <Text>{accessToken}</Text>
          <Button
            onPress={() => {
              setAccessToken('');
            }}>
            <Text>Logout</Text>
          </Button>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
