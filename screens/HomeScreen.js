import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import globalStyles from "../shared/globalStyles";

const HomeScreen = ({ navigation }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <View style={globalStyles.homePageContainer}>
      <Text style={globalStyles.headerText}>Welcome ! </Text>
      <TouchableOpacity
        onPress={() => {
          console.log("Trending Movies");
          navigation.navigate("TrendingMovies");
        }}
        style={globalStyles.button}
      >
        <Text style={globalStyles.buttonText}>Trending Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log("Search");
          navigation.navigate("Search");
        }}
        style={globalStyles.button}
      >
        <Text style={globalStyles.buttonText}>Search</Text>
      </TouchableOpacity>

      {isLoggedIn ? (
        <TouchableOpacity
          onPress={() => {
            console.log("Profile");
            navigation.navigate("Profile");
          }}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            console.log("Login");
            navigation.navigate("Login");
          }}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Login / Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeScreen;
