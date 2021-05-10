import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: {
    email?: string;
    password?: string;
  };
};

export type WelcomeScreenProps = StackNavigationProp<
  AuthStackParamList,
  "Welcome"
>;

export type SignUpScreenProps = StackNavigationProp<
  AuthStackParamList,
  "SignUp"
>;

export type SignInScreenProps = StackNavigationProp<
  AuthStackParamList,
  "SignIn"
>;

export type SignInRouteProps = RouteProp<AuthStackParamList, "SignIn">;
