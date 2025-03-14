import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    console.log("Search Query:", query);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d947b99199fd702c2b87057471b12fdc&query=${query}`);
      const data = await response.json();
      console.log(data.results);
      setResults(data.results);
    }catch(err){
      console.error("Error fetching: ", err);
    }
  };

  return (
    <View>
      <Text>Search</Text>
      <TextInput
        placeholder="Type your search query here"
        value={query}
        onChangeText={setQuery}/>
      <Button title="Search" onPress={handleSearch} />
            <FlatList
              data={results}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.overview}</Text>
                </View>
              )}/>
    </View>
  );
};

export default Search;