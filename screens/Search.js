import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

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
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text>Search</Text>
      <TextInput
        placeholder="Search For"
        value={query}
        onChangeText={setQuery}
      />

      <TouchableOpacity onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>

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
