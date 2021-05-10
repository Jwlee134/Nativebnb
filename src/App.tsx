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
    ]);
    await Promise.all(imageAssets);
  };

  const handleFinish = () => setIsReady(true);

  if (isReady) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={"transparent"}
          translucent
        />
        <Provider store={store}>
          <PersistGate persistor={persister}>
            <Gate />
          </PersistGate>
        </Provider>
      </SafeAreaView>
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
