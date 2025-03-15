import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import globalStyles from '../shared/globalStyles';

const TrendingMovies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=d947b99199fd702c2b87057471b12fdc');
      const data = await response.json();
      setMovies(data.results);
    }catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <View style={globalStyles.TrendingMovies}>
      <Text style ={globalStyles.pageHeader}>Trending Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={globalStyles.movieItem}>
            <Text style={globalStyles.movieTitle}>{item.title}</Text>
            <Text style={globalStyles.movieOverview}>{item.overview}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default TrendingMovies;