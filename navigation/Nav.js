import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
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
      <Stack.Screen 
        component={HomeScreen} 
        name="HomeScreen" 
        options={{ title: "🎬 Home" }}
      />
      <Stack.Screen 
        component={Login} 
        name="Login" 
      />
      <Stack.Screen 
        component={Search} 
        name="Search" 
      />
      <Stack.Screen 
        component={TrendingMovies} 
        name="TrendingMovies"
        options={{ title: "Current Trending Movies" }}
      />
      <Stack.Screen 
        component={MovieDetails} 
        name="MovieDetails" 
        options={{ title: "Brief Movie Description" }}
        />
      <Stack.Screen 
        component={FavMovieDetails} 
        name="FavMovieDetails" 
        options={{ title: "Movie Details" }}
      />
      <Stack.Screen 
        component={Profile} 
        name="Profile" />
    </Stack.Navigator>
  );
};

const FavMoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        component={FavMovies} 
        name="FavMoviesScreen"
        options={{ title: "My Favourite Movies" }}
      />
      <Stack.Screen 
        component={FavMovieDetails} 
        name="FavMovieDetails"
        options={{ title: "Movie Details" }}
      />
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
          options={{ 
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
           }}
        />
        <Tab.Screen
          name="FavMovies"
          component={FavMoviesStack}
          options={{ 
            headerShown: false,
            title: "Favourites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
