import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { createAccountAPI } from "~/api/auth";
import Button from "~/components/common/Button";
import DismissKeyboard from "~/components/common/DismissKeyboard";
import Input from "~/components/common/Input";
import KeyboardAvoidingScrollView from "~/components/common/KeyboardAvoidingScrollView";
import { SignUpScreenProps } from "~/types/navigator";
import { isEmail } from "~/utils";

const SignUp = ({ navigation }: { navigation: SignUpScreenProps }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    if (!firstName || !lastName || !email || !password) {
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
    setLoading(true);
    try {
      const { status } = await createAccountAPI({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status === 201) {
        Alert.alert("Your account has been created. Sign in, please.");
        navigation.navigate("SignIn", {
          email,
          password,
        });
      }
    } catch (error) {
      Alert.alert("The email is already exist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingScrollView>
        <StatusBar barStyle="dark-content" />
        <Input
          value={firstName}
          onChangeText={text => setFirstName(text)}
          placeholder="First Name"
        />
        <Input
          value={lastName}
          onChangeText={text => setLastName(text)}
          placeholder="Last Name"
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
        <Button
          loading={loading}
          text="Sign In"
          backgroundColor="red"
          onPress={handleSubmit}
        />
      </KeyboardAvoidingScrollView>
    </DismissKeyboard>
  );
};

export default SignUp;
