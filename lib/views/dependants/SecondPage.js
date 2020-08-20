import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Container, Text} from 'native-base';

const secondPageStyleSheet = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 40,
  },
});

const SecondPage = () => {
  return (
    <Container style={secondPageStyleSheet.root}>
      <View style={secondPageStyleSheet.container}>
        <Text>I'm on my second page</Text>
      </View>
    </Container>
  );
};

export default SecondPage;
