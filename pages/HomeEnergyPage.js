import React, { useState } from 'react';
import { StyleSheet,Button, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Inputs = ({navigation}) => {
    const [naturalGasDollars, setnaturalGasDollars] = useState('');
    const [electricityDollars, setElectricityDollars] = useState('');
    const [greenPower, setGreenPower] = useState('');
    const [fuelSpending, setFuelSpending] = useState('');
    const [propaneSpending, setPropaneSpending] = useState('');
    const handleSubmit = () => {
        // You can access the form data in formData.people and formData.zip
        // Perform your storage logic here (e.g., send the data to an API, store it locally, etc.)
        navigation.navigate('ModifyHouse')
        };
    const questions = [
        {
            text: 'Monthly amount used on natural gas ($)',
            id: 'naturalGas',
            state: naturalGasDollars,
            onChangeState: setnaturalGasDollars,
            type: 'number-pad',
        },
        {
            text: 'Monthly electricity spending ($)',
            id: 'electricityDollars',
            state: electricityDollars,
            onChangeState: setElectricityDollars,
            type: 'number-pad',
        },
        {
            text: 'Portion of electricity spending that is green power (%)',
            id: 'greenPower',
            state: greenPower,
            onChangeState: setGreenPower,
            type: 'number-pad',
        },
        {
            text: 'Amount spent on fuel oil ($)',
            id: 'fuelSpending',
            state: fuelSpending,
            onChangeState: setFuelSpending,
            type: 'number-pad',
        },
        {
            text: 'Monthly amount spent on propane ($)',
            id: 'propaneSpending',
            state: propaneSpending,
            onChangeState: setPropaneSpending,
            type: 'number-pad',
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
            <Button
                        title="Submit"
                        onPress={handleSubmit}
                        color="blue"
                        
                    />
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

                    <Inputs navigation={navigation} />

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