import React from "react";
import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components/native";
import Button from "~/components/common/Button";
import palette from "~/styles/palette";
import { WelcomeScreenProps } from "~/types/navigator";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

const Block = styled.View`
  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.Text`
  font-size: 32px;
  color: ${palette.red};
  font-weight: bold;
`;

const Welcome = ({ navigation }: { navigation: WelcomeScreenProps }) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Background
        source={require("~/assets/images/welcome.jpg")}
        blurRadius={8}
      />
      <Block>
        <Logo source={require("~/assets/images/airbnb-logo.png")} />
        <LogoText>Nativebnb</LogoText>
      </Block>
      <Block>
        <Button
          onPress={() => navigation.navigate("SignUp")}
          text="Sign Up"
          backgroundColor="red"
        />
        <Button
          onPress={() => navigation.navigate("SignIn")}
          text="Sign In"
          backgroundColor="transparent"
          style={{ marginTop: 20 }}
        />
      </Block>
    </Container>
  );
};

export default Welcome;
