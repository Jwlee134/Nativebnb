import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "~/screens/Auth/Welcome";
import SignUp from "~/screens/Auth/SignUp";
import SignIn from "~/screens/Auth/SignIn";

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign Up" }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
  </Stack.Navigator>
);

export default Auth;
