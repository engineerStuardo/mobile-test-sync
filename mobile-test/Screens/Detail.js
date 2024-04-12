import React from 'react';
import {View, Text, FlatList} from 'react-native';

const DetailScreen = ({ route }) => {
    const { name, interest } = route.params;
    
    return (
        <View>
            <Text>Name: {name}</Text>
            {
                interest.length > 0 && <>
                    <Text>List of insterest:</Text>
                    <FlatList data={interest} renderItem={({item}) => <View><Text>{item}</Text></View>} />
                </>
            }
        </View>
    );
};

export default DetailScreen;
