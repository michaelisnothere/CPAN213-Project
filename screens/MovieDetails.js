import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { addMovie } from "../redux/actions";
import { useDispatch } from "react-redux";
import globalStyles from "../shared/globalStyles";

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
    <ScrollView style={globalStyles.movieDetailScreenContainer}
      contentContainerStyle = {globalStyles.layout}
    >
      <Image
        source={{ uri: `${baseURL}${item.poster_path}` }}
        style={globalStyles.posterImage}
      />
      <View style={globalStyles.movieDetails}>
        <Text style ={{fontWeight: 'bold'}}>{item.title}</Text>
        <Text>{item.overview}</Text>
      </View>
      <View style={globalStyles.movieDetails}>
        <Text style ={{fontWeight: 'bold'}}>Details</Text>
        <Text>Language: {item.original_language}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Release date: {item.release_date}</Text>
        <Text>
          Rated: {item.vote_average} out of {item.vote_count} votes
        </Text>
        <TouchableOpacity
          style={globalStyles.buttonDetail}
          onPress={() => navigation.navigate("TrendingMovies")}>
          <Text>Go back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={globalStyles.buttonDetail}
          onPress={handleAdd}>
          <Text>Add to Favourites?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
