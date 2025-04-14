import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import globalStyles from '../shared/globalStyles';

const TrendingMovies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/w500";

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=d947b99199fd702c2b87057471b12fdc"
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const renderItems = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MovieDetails", { item });
          }}
        >
          <Image
            source={{ uri: `${baseURL}${item.poster_path}` }}
            style={{ width: 150, height: 225 }}
          />
        </TouchableOpacity>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.overview}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={globalStyles.TrendingMovies}>
      <Text style ={globalStyles.pageHeader}>Trending Movies</Text>
      <FlatList
        data={movies}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
<<<<<<< HEAD
=======
        renderItem={({item}) => (
          <View style={globalStyles.movieItem}>
            <Text style={globalStyles.movieTitle}>{item.title}</Text>
            <Text style={globalStyles.movieOverview}>{item.overview}</Text>
          </View>
        )}
>>>>>>> liamHumble
      />
    </View>
  );
};

export default TrendingMovies;
