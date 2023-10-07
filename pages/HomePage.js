import { View, Text } from 'react-native';

const HomePage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <Text style={{ padding: 40, fontSize: 30, color: 'black', textAlign: 'center' }}>
                Hello here is some text
            </Text>
            <Text style={{ padding: 20, fontSize: 24, color: 'black', textAlign: 'center' }}>
                Hello here is smaller text and some descriptions and words and stuff
            </Text>
        </View>
    )
}

export default HomePage;