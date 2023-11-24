import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Keyboard, Alert } from 'react-native';
import SearchResultItem from '../Component/SearchResultItem';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => setSearchResults(data))
            .catch((error) => console.error('Error fetching search results:', error));
        Keyboard.dismiss()
    };

    const navigateToDetails = (item) => {
        Alert.alert('Thank you very much for using this app')
    };

    const renderSearchResultItem = ({ item }) => (
        <SearchResultItem item={item} onSelect={navigateToDetails} />
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search movies..."
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />
            <Button color='red' title="Search" onPress={handleSearch} />

            {searchResults.length > 0 && (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderSearchResultItem}
                    numColumns={1}
                    contentContainerStyle={styles.resultContainer}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black'
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: '80%',
        color: 'white'
    },
    resultContainer: {
        paddingTop: 10,
        color: 'white'
    },
    searchButton: {
        backgroundColor: 'red',

    }
});

export default SearchScreen;
