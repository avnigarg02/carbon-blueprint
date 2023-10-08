import { StyleSheet, View, Text } from 'react-native';

const HomePage = () => {
    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.text1}>
                Hello here is some text
            </Text>
            <Text style={homeStyles.text2}>
                Hello here is smaller text and some descriptions and words and stuff
            </Text>
        </View>
    )
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    text1: {
        padding: 40, 
        fontSize: 30, 
        color: 'black', 
        textAlign: 'center'
    },
    text2: {
        padding: 20, 
        fontSize: 24, 
        color: 'black', 
        textAlign: 'center'
    }
});

export default HomePage;