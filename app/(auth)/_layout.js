import React from "react";
import { View } from "react-native";

const AuthLayout = ({ children }) => {
  return (
    <View>
      <h1>Auth Layout</h1>
      {children}
    </View>
  );
};

export default AuthLayout;
