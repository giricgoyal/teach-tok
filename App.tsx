import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/components/navigation";
import "./i18n";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Navigation />
    </NavigationContainer>
  );
}
