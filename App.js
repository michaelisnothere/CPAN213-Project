import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Nav from "./navigation/Nav";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <Nav />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
