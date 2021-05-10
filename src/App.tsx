import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { Image, SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import { persister, store } from "./store";

const cacheImages = (images: (string | number)[]) =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const isDarkMode = useColorScheme() === "dark";

  const loadAssets = async () => {
    const imageAssets = cacheImages([
      require("~/assets/images/home.jpg"),
      require("~/assets/images/welcome.jpg"),
      require("~/assets/images/airbnb-logo.png"),
      require("~/assets/images/photo1.jpg"),
      require("~/assets/images/photo2.jpg"),
      require("~/assets/images/photo3.jpg"),
      require("~/assets/images/photo4.jpg"),
    ]);
    await Promise.all(imageAssets);
  };

  const handleFinish = () => setIsReady(true);

  if (isReady) {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              barStyle={isDarkMode ? "light-content" : "dark-content"}
              backgroundColor={"transparent"}
              translucent
            />
            <Gate />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }

  return (
    <AppLoading
      startAsync={loadAssets}
      onError={console.warn}
      onFinish={handleFinish}
    />
  );
};

export default App;
