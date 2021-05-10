import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Auth from "~/navigator/Auth";
import Main from "~/navigator/Main";
import { useAppSelector } from "~/store";

const Gate = () => {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

export default Gate;
