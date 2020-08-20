import React, {useContext, useState, useRef, useEffect} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {
  View,
  Card,
  Item,
  CardItem,
  Input,
  Container,
  Button,
  Text,
  Icon,
  Toast,
  Switch,
  Body,
  Right,
} from 'native-base';
import {LoginContext} from '../../../contexts';
import {TextHelper, API} from '../../../helpers';
import Configurations from '../../../configurations/configurations';

const loginStyleSheet = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginFormContainer: {
    marginHorizontal: 40,
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
  },
});

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {setAccessToken} = useContext(LoginContext);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    setUserName('');
    setPassword('');
    setUsernameError(false);
    setPasswordError(false);
  }, []);

  const performlogin = async () => {
    let details = {
      emailId: username.toLowerCase(),
      password: password,
    };
    const apiResponse = await API.login(details);
    if (apiResponse.success) {
      console.log(apiResponse.data);
      setAccessToken(apiResponse.data);
    } else {
      Toast.show({
        text: apiResponse.data,
        type: 'danger',
      });
    }
  };

  const resetErrors = () => {
    setUsernameError(false);
    setPasswordError(false);
  };

  const validate = () => {
    Keyboard.dismiss();
    resetErrors();
    if (username === '' && password === '') {
      setUsernameError(true);
      setPasswordError(true);
      Toast.show({
        text: 'Empty Feilds',
        type: 'danger',
      });
    } else if (username === '') {
      setUsernameError(true);
      Toast.show({
        text: 'Enter Email',
        type: 'danger',
      });
    } else if (password === '') {
      setPasswordError(true);
      Toast.show({
        text: 'Enter Password',
        type: 'danger',
      });
    } else if (!TextHelper.validateEmail(username)) {
      Toast.show({
        text: 'Invalid Email',
        type: 'danger',
      });
      setUsernameError(true);
    } else {
      performlogin();
    }
  };

  const changeUsername = (text) => {
    if (usernameError) {
      setUsernameError(false);
    }
    setUserName(text);
  };
  const changePassword = (text) => {
    if (usernameError) {
      setPasswordError(false);
    }
    setPassword(text);
  };

  useEffect(() => {
    if (devMode) {
      setUserName(Configurations.devDetails.username);
      setPassword(Configurations.devDetails.password);
    } else {
      setUserName('');
      setPassword('');
    }
    resetErrors();
  }, [devMode]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container style={loginStyleSheet.root}>
        <View style={loginStyleSheet.loginFormContainer}>
          <Card style={{padding: 15, alignItems: 'center'}}>
            <CardItem>
              <Text style={{fontWeight: 'bold'}}>Login</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Dev Mode</Text>
              </Body>
              <Right>
                <Switch
                  value={devMode}
                  onValueChange={(newValue) => setDevMode(newValue)}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Item regular error={usernameError}>
                <Input
                  ref={usernameRef}
                  placeholder="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  returnKeyType="next"
                  value={username}
                  onChangeText={(text) => changeUsername(text)}
                  onSubmitEditing={() => {
                    passwordRef.current._root.focus();
                  }}
                />
                {usernameError && (
                  <Icon
                    onPress={() => changeUsername('')}
                    name="close-circle"
                  />
                )}
              </Item>
            </CardItem>
            <CardItem>
              <Item regular error={passwordError}>
                <Input
                  value={password}
                  ref={passwordRef}
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={(text) => changePassword(text)}
                />
                {passwordError && (
                  <Icon
                    onPress={() => changePassword('')}
                    name="close-circle"
                  />
                )}
              </Item>
            </CardItem>
            <CardItem>
              <Button
                onPress={() => {
                  validate();
                }}
                style={loginStyleSheet.loginButton}>
                <Text>Login</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
