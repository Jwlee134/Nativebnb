import { StackNavigationProp } from "@react-navigation/stack";

export type AuthStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
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
