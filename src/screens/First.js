import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { useRef } from 'react';

const width = Dimensions.get("screen").width;

const Screen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const scrollRef = useRef();

    useEffect(() => {
        navigation.setOptions({
            headerRight: (props) => (<View style={{ width: 50, paddingRight: 20, alignItems: 'flex-end' }} {...props}>
                <Text style={{ fontSize: 15 }} onPress={() => navigation.navigate("Second")}>Next</Text>
            </View>)
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor='transparent' barStyle="dark-content" translucent />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ height: 20 }} />

                <View style={{ width: 100, height: 100 }}>
                    <LottieView source={require('../lotties/lurking-cat.json')} autoPlay loop />
                </View>
                <View style={{ height: 20 }} />

                <View style={{ width: 100, height: 100 }}>
                    <LottieView source={require('../lotties/butterfly-loader.json')} autoPlay loop />
                </View>
                <View style={{ height: 20 }} />

                <View style={{ width: 150, height: 150 }}>
                    <LottieView source={require('../lotties/keywords.json')} autoPlay loop />
                </View>
                <View style={{ height: 20 }} />

                <View style={{ width: 150, height: 150 }}>
                    <LottieView source={require('../lotties/file-storage.json')} autoPlay loop />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Screen;