import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieComponent from '../Component/MovieComponent';

const HomeScreen = () => {
    const [movieData, setMovieData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => res.json())
            .then((data) => setMovieData(data))
            .catch((error) => console.error('Error fetching search results:', error));
    }, []);

    const renderMovieItem = ({ item }) => (
        <TouchableOpacity onPress={() => goToDetailsScreen(item)}>
            <MovieComponent movieData={item} />
        </TouchableOpacity>
    );

    const goToDetailsScreen = (show) => {
        navigation.navigate('Details', { show });
    };

    const goToSearchScreen = () => {
        navigation.navigate('Search');
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={movieData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderMovieItem}
                numColumns={2}
                contentContainerStyle={styles.movieList}
            />
            <TouchableOpacity style={styles.searchIcon} onPress={goToSearchScreen}>
                <Text style={styles.searchText}>🔍</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },
    movieList: {
        paddingVertical: 10,
    },
    searchIcon: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        padding: 10,
    },
    searchText: {
        color: 'white',
        fontSize: 20,
    },
});

export default HomeScreen;
