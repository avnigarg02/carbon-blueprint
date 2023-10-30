import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Inputs = () => {
    const [people, setPeople] = useState('');
    const [zip, setZip] = useState('');

    const questions = [
        {
            text: 'Number of People in Household',
            id: 'people',
            state: people,
            onChangeState: setPeople,
            type: 'number-pad',
        },
        {
            text: 'Zip Code',
            id: 'zip',
            state: zip,
            onChangeState: setZip,
            type: 'number-pad',
            length: 5,
        },
        
    ]

    return (
        <ScrollView
            indicatorStyle={"navy"}
            style={houseStyles.scrollContainer}
            // keyboardDismissMode='on-drag'
        >
            {questions.map((question) => (
                <>
                    <Text key={question.id} style={houseStyles.itemText}>
                        {question.text + '\n'}
                    </Text>
                    <TextInput
                        key={question.id + 'Input'}
                        value={question.state}
                        onChangeText={question.onChangeState}
                        keyboardType={question.type}
                        maxLength={question.length}
                        style={houseStyles.input}
                    />
                </>
            ))}
        </ScrollView>
    )
}

const HousePage = ({navigation}) => {
    return (
        <>
            <View style={houseStyles.container}>

                <KeyboardAvoidingView
                    style={houseStyles.inner}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

                    <Text style={houseStyles.titleText}>
                        House Properties
                    </Text>

                    <Inputs />

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
    }
});

export default HousePage;