import React from "react";
import { View, Text, Button} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View>
          <Text>Home Screen</Text>
          <Button
            title="Trending Movies"
            onPress={() => {
              console.log('Trending Movies');
              navigation.navigate('TrendingMovies');
            }}
          />
            <Button
                title="Search"
                onPress={() => {
                console.log('Search');
                navigation.navigate('Search');
                }} />

            <Button
                title="Login or Sign Up"
                onPress={() => {
                console.log('Login');
                navigation.navigate('Login');
                }} />
        </View>
      );
}
export default HomeScreen;