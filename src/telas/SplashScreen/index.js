import React from 'react';
import { SafeAreaView } from 'react-native';

import LottieView from 'lottie-react-native';

import splashAluraMed from '../../assets/splash-aluramed.json';

import styles from './styles';

const SplashScreen = ({ navigation }) => {
    const animacaoFinalizada = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <LottieView
                source={splashAluraMed}
                onAnimationFinish={animacaoFinalizada}
                loop={false}
                autoPlay
            />
        </SafeAreaView>
    );
};

export default SplashScreen;
