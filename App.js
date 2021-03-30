import React from 'react';
import { View } from 'react-native';
import AppNavigator from './src/navigator';

const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <AppNavigator />
        </View>
    )
}

export default App;