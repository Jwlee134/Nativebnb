import React, { useState } from "react";
import { StatusBar } from "react-native";
import Button from "~/components/common/Button";
import DismissKeyboard from "~/components/common/DismissKeyboard";
import Input from "~/components/common/Input";
import KeyboardAvoidingScrollView from "~/components/common/KeyboardAvoidingScrollView";
import { SignUpScreenProps } from "~/types/navigator";

const SignUp = ({ navigation }: { navigation: SignUpScreenProps }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => console.log(email, password);

  return (
    <DismissKeyboard>
      <KeyboardAvoidingScrollView>
        <StatusBar barStyle="dark-content" />
        <Input
          value={firstName}
          onChangeText={text => setFirstName(text)}
          placeholder="First name"
          autoCapitalize="none"
        />
        <Input
          value={lastName}
          onChangeText={text => setLastName(text)}
          placeholder="Last name"
          autoCapitalize="none"
        />
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
      </KeyboardAvoidingScrollView>
    </DismissKeyboard>
  );
};

export default SignUp;
