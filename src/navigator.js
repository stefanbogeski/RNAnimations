import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from './screens/First';
import SecondScreen from './screens/Second';
import ThirdScreen from './screens/Third';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={() => (<View></View>)}>
                <Drawer.Screen name="Home">
                    {() => (
                        <Stack.Navigator screenOptions={{
                            headerLeft: (props) => (
                                <View style={{ width: 50 }}><HeaderBackButton {...props} /></View>
                            ),
                            headerStyle: {
                                elevation: 0,
                                height: 70,
                                backgroundColor: 'white'
                            },
                            headerTitleStyle: {
                                textAlignVertical: 'center',
                                alignSelf: 'center'
                            },
                        }}>
                            <Stack.Screen name="First" component={FirstScreen} options={{ title: "Lottie Animation" }} />
                            <Stack.Screen name="Second" component={SecondScreen} options={{title: "react-native-reanimated"}}/>
                            <Stack.Screen name="Third" component={ThirdScreen} options={{title: "Native animation"}}/>
                        </Stack.Navigator>
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}