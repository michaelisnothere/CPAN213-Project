import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
      <View style={globalStyles.profileContainer}>
        <Text style={globalStyles.profileTitle}>Profile Page</Text>
        <Text style={globalStyles.profileText}> Hello, {username}!</Text>
        <TouchableOpacity style={globalStyles.buttonDetail} onPress={handleLogout}>
          <Text style={globalStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Profile;
