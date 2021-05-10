import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { loginAPI } from "~/api/auth";
import Button from "~/components/common/Button";
import DismissKeyboard from "~/components/common/DismissKeyboard";
import Input from "~/components/common/Input";
import { login, userLogin } from "~/store/user";
import { SignInRouteProps, SignInScreenProps } from "~/types/navigator";
import { isEmail } from "~/utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SignIn = ({
  navigation,
  route: { params },
}: {
  navigation: SignInScreenProps;
  route: SignInRouteProps;
}) => {
  const [email, setEmail] = useState(params?.email || "");
  const [password, setPassword] = useState(params?.password || "");

  const dispatch = useDispatch();

  const isFormValid = () => {
    if (!email || !password) {
      Alert.alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      Alert.alert("Please add a valid email.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    try {
      const {
        data: { id, token },
      } = await loginAPI({ username: email, password });
      if (id && token) dispatch(login(token));
    } catch (error) {
      Alert.alert("Wrong email or password.");
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            style={{ marginBottom: 32 }}
          />
          <Button text="Sign In" backgroundColor="red" onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

export default SignIn;
