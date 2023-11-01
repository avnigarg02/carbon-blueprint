import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { useRoute } from "@react-navigation/native"


const HousePage = ({ navigation }) => {

    const route = useRoute()
    const username = route.params?.username

    return (
        <>
            <View style={houseStyles.container}>

                <KeyboardAvoidingView
                    style={houseStyles.inner}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

                    <Text style={houseStyles.titleText}>
                        House Properties
                    </Text>
                    <View style={houseStyles.buttonContainer}>

                        <TouchableOpacity
                            style={houseStyles.thisButton}
                            title="General info"
                            onPress={() => navigation.navigate('GeneralInfo', { username: username })}
                        >
                            <Text style={buttonStyles.buttonText}>General info</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={houseStyles.thisButton}
                            title="Household vehicles"
                            onPress={() => navigation.navigate('HouseholdVehicles', { username: username })}
                        >
                            <Text style={buttonStyles.buttonText}>Household vehicles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={houseStyles.thisButton}
                            title="Home energy"
                            onPress={() => navigation.navigate('HomeEnergy', { username: username })}
                        >
                            <Text style={buttonStyles.buttonText}>Home energy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={houseStyles.thisButton}
                            title="Waste"
                            onPress={() => navigation.navigate('Waste')}
                        >
                            <Text style={buttonStyles.buttonText}>Waste</Text>
                        </TouchableOpacity>
                    </View>





                </KeyboardAvoidingView>

            </View>
        </>
    )
}

const houseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    inner: {
        flex: 0.98,
    },
    scrollContainer: {
        padding: 20,
        backgroundColor: 'lightcyan'
    },
    titleText: {
        padding: 20,
        fontSize: 30,
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    itemText: {
        fontSize: 20,
        margin: 0,
    },
    input: {
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'black',
        backgroundColor: 'azure',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-evenly', // Evenly space items vertically
        alignItems: 'center', // Center items horizontally
    },
    thisButton: {
        width: 250,
        backgroundColor: 'darkblue',
        padding: 20,
        marginVertical: -100, // Reduce the vertical margin to control the space between buttons
        borderRadius: 10,
        alignItems: 'center',
        color: 'black',
    },
});

export default HousePage;