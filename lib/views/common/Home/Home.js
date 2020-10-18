import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { View, Container, Text, Button, Item } from 'native-base';
import { LoginContext } from '../../../contexts';

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
  const { setAccessToken, accessToken } = useContext(LoginContext);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          transparent
          onPress={() => {
            setAccessToken('');
          }}>
          <Text>Logout</Text>
        </Button>
      ),
    });
  }, [props.navigation, setAccessToken]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container style={homeStyleSheet.root}>
        <View style={homeStyleSheet.container}>
          <Item regular>
            <Text>{accessToken}</Text>
          </Item>
          <Item regular>
            <Button
              onPress={() => {
                props.navigation.navigate('SecondPage', {
                  name: 'My Custom Name',
                });
              }}>
              <Text>Navigate to next page</Text>
            </Button>
          </Item>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const HomeHeader = {
  headerShown: true,
  headerRight: () => <Button onPress={() => { }} title="Logout" color="#fff" />,
};
export { HomeHeader };
export default Home;
