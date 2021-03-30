import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native'

const arr = []
for (var i = 0; i < 500; i++) {
    arr.push(i)
}

const Screen = () => {
    const navigation = useNavigation();
    const animatedValue = useRef(arr.map(item => (new Animated.Value(0)))).current;

    useEffect(() => {
        navigation.setOptions({
            headerRight: (props) => (<View style={{ width: 50, paddingRight: 20, alignItems: 'flex-end' }} {...props} />)
        })
        const animations = arr.map((item) => {
            return Animated.timing(
                animatedValue[item],
                {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true
                }
            )
        });
        Animated.stagger(20, animations).start()
    }, [])

    return (
        <View style={styles.container}>
            {
                arr.map((item, i) => (
                    <Animated.View
                        key={i}
                        style={{
                            opacity: animatedValue[item],
                            height: 22,
                            width: 22,
                            backgroundColor: 'red',
                            marginLeft: 2,
                            marginTop: 2
                        }}
                    />
                ))
            }
        </View>
    )
}

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
