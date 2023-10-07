import React from 'react';
import { View, Text ,Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title = "Go to house House"
                onPress= {() =>navigation.navigate('House')}
            />
        </View>
    );
};

export default Home;