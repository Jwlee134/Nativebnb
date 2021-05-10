import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IProps {
  name: string;
  focused: boolean;
  color: string;
}

const TabIcon = ({ name, focused, color }: IProps) => (
  <Ionicons name={focused ? name : `${name}-outline`} size={24} color={color} />
);

export default TabIcon;
