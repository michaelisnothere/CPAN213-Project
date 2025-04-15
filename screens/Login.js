import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/actions";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import globalStyles from "../shared/globalStyles";


const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { username };
    dispatch(login(user));
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={globalStyles.loginContainer}>
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity 
        style={globalStyles.button}  
        onPress={handleLogin}
      >
        <Text style={globalStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
