import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

import globalStyles from "../shared/globalStyles";


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    return(
        <View style={globalStyles.loginContainer}>
            <Text>Login Screen</Text>
            <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
                setUsername(text);
            }} />
            
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
                setPassword(text);
            }} />
            <Button
                title="Login"
                onPress={() => {
                    console.log('Login');
                    console.log(username)
                    console.log(password)
                    navigation.navigate('Home');
                }}
            />
        </View>
    )
}
export default Login;