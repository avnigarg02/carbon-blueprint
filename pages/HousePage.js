import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import buttonStyles from '../components/Button';
const HomePage = ({navigation}) => {
    return (
        <View style={homeStyles.container}>
            <TouchableOpacity 
                style={buttonStyles.button}
                title = "Edit house info"
                onPress={() => navigation.navigate('ModifyHouse')}
            

            >
                <Text style={buttonStyles.buttonText}>Edit house info</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={buttonStyles.button}
                title = "Thermostat"
                onPress={() => navigation.navigate('Thermostat')}
            

            >
                <Text style={buttonStyles.buttonText}>Thermostat</Text>
            </TouchableOpacity>
            <Text style={[homeStyles.text2]}>
                Your household CO2 emissions:
            </Text>
        </View>
    )
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
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