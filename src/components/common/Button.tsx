import React from "react";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import palette from "~/styles/palette";
import { IButton, IGetColorProps, IStyleProps } from "~/types/components";

const { width } = Dimensions.get("screen");

const getColor = ({ backgroundColor, type }: IGetColorProps) => {
  switch (backgroundColor) {
    case "red":
      if (type === "view") {
        return css`
          background-color: ${palette.red};
        `;
      } else {
        return css`
          color: white;
        `;
      }
    case "transparent":
      if (type === "view") {
        return css`
          background-color: transparent;
          border: 1px solid ${palette.black};
        `;
      } else {
        return css`
          color: black;
        `;
      }
    default:
      break;
  }
};

const Container = styled.View<IStyleProps>`
  background-color: transparent;
  width: ${width / 1.5}px;
  align-items: center;
  border-radius: 8px;
  padding: 12px 0px;
  height: 48px;
  justify-content: center;
  ${({ backgroundColor }) => getColor({ backgroundColor, type: "view" })}
`;

const Label = styled.Text<IStyleProps>`
  font-size: 15px;
  font-weight: bold;
  ${({ backgroundColor }) => getColor({ backgroundColor, type: "text" })}
`;

const Button = ({
  onPress,
  text,
  style,
  backgroundColor,
  loading,
}: IButton) => (
  <TouchableOpacity disabled={loading} onPress={onPress} activeOpacity={0.8}>
    <Container style={style} backgroundColor={backgroundColor}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={backgroundColor === "red" ? "white" : "black"}
        />
      ) : (
        <Label backgroundColor={backgroundColor}>{text}</Label>
      )}
    </Container>
  </TouchableOpacity>
);

export default Button;
