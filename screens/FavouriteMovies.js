import { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions";

const FavMovies = ({ navigation }) => {
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.movies.listOfMovies);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const baseURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchMovies());
    }
  }, [dispatch, isLoggedIn]);

  const renderItems = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FavMovieDetails", { item });
          }}
        >
          <Image
            source={{ uri: `${baseURL}${item.Movie.poster_path}` }}
            style={{ width: 150, height: 225 }}
          />
        </TouchableOpacity>
        <Text>{item.Movie.title}</Text>
      </View>
    );
  };

  if (!isLoggedIn) {
    return (
      <View>
        <Text>You need to be logged in to view your favourite movies.</Text>
      </View>
    );
  }

  return (
    <View>
      {favMovies && favMovies.length > 0 ? (
        <View>
          <Text>Favourite Movies</Text>
          <View>
            <FlatList
              data={favMovies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItems}
            />
          </View>
        </View>
      ) : (
        <Text>No favourites added</Text>
      )}
    </View>
  );
};

export default FavMovies;
