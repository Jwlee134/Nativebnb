import { StyleProp, ViewStyle } from "react-native";

// common button component

export type BackgroundColor = "red" | "transparent";

export interface IButton {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  backgroundColor: BackgroundColor;
}

export interface IStyleProps {
  backgroundColor: BackgroundColor;
}

export interface IGetColorProps {
  backgroundColor: BackgroundColor;
  type: "view" | "text";
}
