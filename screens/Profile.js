import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import globalStyles from "../shared/globalStyles";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user?.username);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("HomeScreen");
  };

  return (
    <View>
      <Text>Profile Page</Text>
      <Text>Welcome, {username}!</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
