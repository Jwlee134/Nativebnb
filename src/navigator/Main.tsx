import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "~/screens/Main/Explore";
import Profile from "~/screens/Main/Profile";
import Saved from "~/screens/Main/Saved";
import Map from "~/screens/Main/Map";
import palette from "~/styles/palette";
import TabIcon from "~/components/common/TabIcon";

const Tab = createBottomTabNavigator();

const Main = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: palette.red,
      labelStyle: {
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      tabStyle: {
        paddingTop: 4,
        paddingBottom: 4,
      },
    }}>
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <TabIcon name="earth" focused={focused} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Saved"
      component={Saved}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <TabIcon name="heart" focused={focused} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={Map}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <TabIcon name="map" focused={focused} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <TabIcon name="person-circle" focused={focused} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Main;
