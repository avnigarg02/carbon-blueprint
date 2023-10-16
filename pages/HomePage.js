import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomePage = ({navigation}) => {
    return (
        <View style={homeStyles.container}>
            <Button 
                style={[homeStyles.text1,{paddingTop:80}]}
                title = "House"
                onPress={() => navigation.navigate('House')}
       

            />
            <Button 
                style={[homeStyles.text1,{paddingTop:80}]}
                title = "Spending"
                onPress={() => navigation.navigate('Spending')}
       

            />
            <Text style={[homeStyles.text2,{paddingBottom:20}]}>
                Your total CO2 usage:
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