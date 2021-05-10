import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Auth from "~/navigator/Auth";
import { useAppSelector } from "~/store";
import { logout } from "~/store/user";

const Gate = () => {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};

export default Gate;
