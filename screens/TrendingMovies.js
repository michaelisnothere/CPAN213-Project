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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MovieDetails", { item });
        }}
        style={globalStyles.touchWrapper}
      >
        <View style={globalStyles.movieContainer}>
          <Image
            source={{ uri: `${baseURL}${item.poster_path}` }}
            style={globalStyles.posterImage}
          />
          <View style={globalStyles.textContainer}>
            <Text style={globalStyles.movieTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={globalStyles.movieOverview} numberOfLines={4}>
              {item.overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.TrendingMovies}>
      <Text style ={globalStyles.pageHeader}>Click for more info! </Text>
      <FlatList
        data={movies}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TrendingMovies;
