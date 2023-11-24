import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

function removeHtmlTags(inputString) {
    return inputString.replace(/<[^>]*>/g, '');
}

const MovieDetailsScreen = ({ route }) => {
    const { movieData } = route.params;
    const cleanedSummary = removeHtmlTags(movieData.show.summary);

    const openOfficialSite = () => {
        const url = movieData.show.officialSite;
        if (url) {
            Linking.openURL(url);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.thumbnail} source={{ uri: movieData.show.image.medium }} />
            <Text style={styles.title}>{movieData.show.name}</Text>
            <Text style={styles.genres}>Genres: {movieData.show.genres.join(', ')}</Text>
            <Text style={styles.status}>Status: {movieData.show.status}</Text>
            <Text style={styles.premiered}>Premiered: {movieData.show.premiered}</Text>
            <Text style={styles.rating}>Average Rating: {movieData.show.rating.average} ⭐</Text>
            <Text style={styles.summary}>{cleanedSummary}</Text>
            {movieData.show.officialSite && (
                <TouchableOpacity onPress={openOfficialSite}>
                    <Text style={styles.officialSiteLink}>Official Site: {movieData.show.officialSite}</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    thumbnail: {
        width: 300,
        height: 400,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
    },
    genres: {
        fontSize: 16,
        marginTop: 5,
        color: 'white'
    },
    status: {
        fontSize: 16,
        marginTop: 5,
        color: 'white'
    },
    premiered: {
        fontSize: 16,
        marginTop: 5,
        color: 'white'
    },
    rating: {
        fontSize: 16,
        marginTop: 5,
        color: 'white'
    },
    summary: {
        marginTop: 10,
        fontSize: 16,
        color: 'white'
    },
    officialSiteLink: {
        marginTop: 10,
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default MovieDetailsScreen;
