import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <View>
      <Text>Home Screen</Text>

      <TouchableOpacity
        onPress={() => {
          console.log("Trending Movies");
          navigation.navigate("TrendingMovies");
        }}
      >
        <Text>Trending Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log("Search");
          navigation.navigate("Search");
        }}
      >
        <Text>Search</Text>
      </TouchableOpacity>

      {isLoggedIn ? (
        <TouchableOpacity
          onPress={() => {
            console.log("Profile");
            navigation.navigate("Profile");
          }}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            console.log("Login");
            navigation.navigate("Login");
          }}
        >
          <Text>Login / Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeScreen;
