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
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
