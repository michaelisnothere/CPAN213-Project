import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Search from "../screens/Search";
import TrendingMovies from "../screens/TrendingMovies";
import MovieDetails from "../screens/MovieDetails";
import FavMovies from "../screens/FavouriteMovies";
import FavMovieDetails from "../screens/FavMovieDetails";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Search} name="Search" />
      <Stack.Screen component={TrendingMovies} name="TrendingMovies" />
      <Stack.Screen component={MovieDetails} name="MovieDetails" />
      <Stack.Screen component={FavMovieDetails} name="FavMovieDetails" />
      <Stack.Screen component={Profile} name="Profile" />
    </Stack.Navigator>
  );
};

const FavMoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={FavMovies} name="FavMoviesScreen" />
      <Stack.Screen component={FavMovieDetails} name="FavMovieDetails" />
    </Stack.Navigator>
  );
};

const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [{ display: "flex" }],
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="FavMovies"
          component={FavMoviesStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
