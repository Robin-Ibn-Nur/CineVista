import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import SplashLottie from '../assets/splash.json';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 4500);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView source={SplashLottie} autoPlay loop />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Splash;
