import React from 'react';
import {View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
    try {
        const response = await axios.get('https://dev.api.syncremote.co/api/v1/admin/users')
        return response.data.users
    } catch (error) {
        throw new Error('Error fetching users')
    }
};

const HomeScreen = ({ navigation }) => {
    const { data, isLoading, error } = useQuery('users', fetchUsers);

    if (isLoading) {
        return <ActivityIndicator />
    }

    return (
        <FlatList data={data} renderItem={(user) => <UserName navigation={navigation} name={user.item.name} interest={user.item.interest} />} />
    );
};

const UserName = ({navigation, name, interest}) => {
    if (name === 'undefined')
    {
        return <View><Text>No name available</Text></View>
    }

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', {
            name,
            interest
        })}
        }>
            <View>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeScreen;
