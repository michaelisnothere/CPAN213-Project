import { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions";

import globalStyles from "../shared/globalStyles";

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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FavMovieDetails", { item });
          }}
          style={globalStyles.touchWrapper}
        >
          <View style={globalStyles.movieContainer}>
            <Image
              source={{ uri: `${baseURL}${item.Movie.poster_path}` }}
              style={globalStyles.posterImage}
            />
            <View style={globalStyles.textContainer}>
              <Text style={globalStyles.movieTitle}>{item.Movie.title}</Text>
            </View>
        </View>
        </TouchableOpacity>

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
          <View>
            <FlatList
              data={favMovies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItems}
            />
          </View>
        </View>
      ) : (
        <View style={globalStyles.movieContainer}>
          <Text>No favourites added</Text>
        </View>
      )}
    </View>
  );
};

export default FavMovies;
