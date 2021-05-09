import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "~/store";
import { login, logout } from "~/store/user";

const Gate = () => {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(login("haha"))}>
          <Text>Log In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Gate;
