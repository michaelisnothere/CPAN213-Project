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
  const [searchPerformed, setSearchPerformed] = useState(false);
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
      setSearchPerformed(true);
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
    <View >
      <View style={{ marginTop: 10, marginHorizontal: 5,alignItems: 'center'}}>
        <TextInput
          placeholder="Search For Movie By title"
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            setSearchPerformed(false);
          }}
          style={globalStyles.inputBox}
          
        />

        <TouchableOpacity
          style={globalStyles.button}  
          onPress={handleSearch}>
          <Text style={globalStyles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>


      <View style={{ marginTop: 20 }}>
        {searchPerformed && results.length === 0 ? (
          <Text 
            style={{ textAlign: "center", fontSize: 16 }}
          >
            No search results found for "{query}" </Text>
        ) : (
          <FlatList
            data={results}
            renderItem={renderItems}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Search;
