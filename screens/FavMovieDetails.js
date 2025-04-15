import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addMovie } from "../redux/actions";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/actions";

import globalStyles from "../shared/globalStyles";

const FavMovieDetails = ({ navigation, route }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const { item } = route.params;
  const dispatch = useDispatch();

  const handleDelete = () => {
    Alert.alert(
      "Delete Favourite",
      "Are you sure you want to delete this movie?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            dispatch(deleteMovie(item.id));
            navigation.navigate("FavMoviesScreen");
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <ScrollView>
      <View style={globalStyles.movieDetailScreenContainer}>
        <Image
          source={{ uri: `${baseURL}${item.Movie.poster_path}` }}
          style={globalStyles.posterImage}
        />
        <View style={globalStyles.movieDetails}>
          <Text style ={{fontWeight: 'bold'}}>{item.Movie.title}</Text> 
          <Text>{item.Movie.overview}</Text>
        </View>


      <View style={globalStyles.movieDetails}>
        <Text style ={{fontWeight: 'bold'}}>Details</Text>
        <Text>Language: {item.Movie.original_language}</Text>
        <Text>Popularity: {item.Movie.popularity}</Text>
        <Text>Release date: {item.Movie.release_date}</Text>
        <Text>
          Rated: {item.Movie.vote_average} out of {item.Movie.vote_count} votes
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("FavMoviesScreen")}
          style={globalStyles.buttonDetail}
        >
          <Text>Go back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={globalStyles.buttonDetail}
          onPress={handleDelete}>
          <Text>Delete From Favs?</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>

  );
};

export default FavMovieDetails;
