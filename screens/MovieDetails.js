import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { addMovie } from "../redux/actions";
import { useDispatch } from "react-redux";

const MovieDetails = ({ navigation, route }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const { item } = route.params;
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newFav = {
      Movie: item,
    };
    dispatch(addMovie(newFav));
    Alert.alert("Movie added to favourites!");
  };

  return (
    <View>
      <Image
        source={{ uri: `${baseURL}${item.poster_path}` }}
        style={{ width: 150, height: 225 }}
      />
      <Text>{item.title}</Text>
      <Text>{item.overview}</Text>

      <View>
        <Text>Details</Text>
        <Text>Language: {item.original_language}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Release date: {item.release_date}</Text>
        <Text>
          Rated: {item.vote_average} out of {item.vote_count} votes
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("TrendingMovies")}>
          <Text>Go back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAdd}>
          <Text>Add to Favourites?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieDetails;
