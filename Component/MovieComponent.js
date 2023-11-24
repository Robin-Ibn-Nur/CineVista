import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function removeHtmlTags(inputString) {
    return inputString.replace(/<[^>]*>/g, '');
}

const MovieComponent = ({ movieData }) => {
    const navigation = useNavigation();

    const handleMoviePress = () => {
        navigation.navigate('Details', { movieData });
    };

    const cleanedSummary = removeHtmlTags(movieData.show.summary);

    return (
        <TouchableOpacity onPress={handleMoviePress}>
            <View style={styles.container}>
                <Image style={styles.thumbnail} source={{ uri: movieData.show.image.medium }} />
                <Text style={styles.title}>{movieData.show.name}</Text>
                <Text style={styles.summary}>{cleanedSummary}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderColor: "1px solid black",
        overflow: 'hidden',
        margin: 10,
        alignItems: 'center',
    },
    thumbnail: {
        flex: 1,
        width: "50%",
        height: 300,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: "white"
    },
    summary: {
        color: "white",
        padding: 10,
    },
});

export default MovieComponent;
