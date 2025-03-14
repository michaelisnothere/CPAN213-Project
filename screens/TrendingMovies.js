import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

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
    <View>
      <Text>Trending Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.overview}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default TrendingMovies;