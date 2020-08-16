import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Home } from "../views/index";

const NavStack = createStackNavigator();

const Routes = () => {
    return <NavigationContainer>
        <NavStack.Navigator initialRouteName="Login" >
            <NavStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <NavStack.Screen name="Home" component={Home} />
        </NavStack.Navigator>
    </NavigationContainer>
}

export default Routes;