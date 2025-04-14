import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import globalStyles from "../shared/globalStyles";

const Search = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/w500";

  const handleSearch = async () => {
    console.log("Search Query:", query);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d947b99199fd702c2b87057471b12fdc&query=${query}`
      );
      const data = await response.json();
      console.log(data.results);
      setResults(data.results);
    } catch (err) {
      console.error("Error fetching: ", err);
    }
  };

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
              <Text style={globalStyles.movieTitle}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>

    );
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Search For"
          value={query}
          onChangeText={setQuery}
          style={globalStyles.inputBox}
        />

        <TouchableOpacity
          style={globalStyles.loginButton}  
          onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>


      <View>
        <FlatList
          data={results}
          renderItem={renderItems}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Search;
