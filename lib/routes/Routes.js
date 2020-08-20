import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Spinner} from 'native-base';
import {Login, Home, SecondPage} from '../views/index';
import {LoginContext} from '../contexts/index';

const NavStack = createStackNavigator();

const Routes = () => {
  const {loginStatus} = useContext(LoginContext);
  if (loginStatus === undefined) {
    return <Spinner />;
  }
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="Login">
        <NavStack.Screen
          options={{headerShown: loginStatus ? true : false}}
          name={'LandingPage'}
          component={loginStatus ? Home : Login}
        />
        <NavStack.Screen
          options={({route}) => ({
            title:
              route.params.name === undefined
                ? 'SecondScreen'
                : route.params.name,
            headerShown: true,
          })}
          name={'SecondPage'}
          component={SecondPage}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
