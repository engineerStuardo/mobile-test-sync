import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./Screens/Home";
import DetailScreen from "./Screens/Detail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default App;
