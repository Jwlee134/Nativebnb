import React from "react";
import { Dimensions, StyleProp, TextInputProps, ViewStyle } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

interface IInput extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid gray;
  background-color: white;
  margin-bottom: 12px;
  height: 48px;
`;

const Input = ({ ...props }: IInput) => <Container {...props} />;

export default Input;
