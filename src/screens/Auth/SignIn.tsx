import React, { useState } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Button from "~/components/common/Button";
import DismissKeyboard from "~/components/common/DismissKeyboard";
import Input from "~/components/common/Input";
import { SignInScreenProps } from "~/types/navigator";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SignIn = ({ navigation }: { navigation: SignInScreenProps }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => console.log(email, password);

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
