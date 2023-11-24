import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchResultItem = ({ item, onSelect }) => {
    const handleSelect = () => {
        onSelect(item);
    };

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={handleSelect}>
            <Image style={styles.thumbnail} source={{ uri: item.show.image?.medium }} />
            <Text style={styles.title}>{item.show.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 8,
    },
    thumbnail: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
        color: 'white'
    },
});

export default SearchResultItem;
