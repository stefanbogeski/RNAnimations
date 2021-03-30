import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Sequence from '../components/Sequence';
import Progress from '../components/Progress';
import WidthHeight from '../components/WidthHeight';


const Screen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: (props) => (<View style={{ width: 50, paddingRight: 20, alignItems: 'flex-end' }} {...props}>
                <Text style={{ fontSize: 15 }} onPress={() => navigation.navigate("Third")}>Next</Text>
            </View>)
        })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <StatusBar backgroundColor='white' barStyle="dark-content" />
            <View style={{ height: 20 }} />
            <Progress />
            <View style={{ height: 20 }} />
            <View style={{ height: 100 }}>
                <Sequence />
            </View>
            <View style={{ height: 20 }} />
            <WidthHeight />
        </View>
    )
}

export default Screen;