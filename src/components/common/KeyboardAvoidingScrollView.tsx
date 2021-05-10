import React, { ReactNode } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

const KeyboardAvoidingScrollView = ({ children }: { children: ReactNode }) => (
  <KeyboardAvoidingView
    style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    }}>
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        {children}
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
);

export default KeyboardAvoidingScrollView;
