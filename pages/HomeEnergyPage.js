import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { ref, set, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"

const Inputs = ({ navigation }) => {

    const route = useRoute()
    const username = route.params?.username

    const [naturalGasDollars, setnaturalGasDollars] = useState('');
    const [electricityDollars, setElectricityDollars] = useState('');
    const [greenPower, setGreenPower] = useState('');
    const [fuelSpending, setFuelSpending] = useState('');
    const [propaneSpending, setPropaneSpending] = useState('');

    useEffect(() => {
        const db = database;
        onValue(ref(db, 'users/' + username + '/energy/'), (snapshot) => {
            if (snapshot.val()?.naturalGasDollars) {
                setnaturalGasDollars(snapshot.val().naturalGasDollars.toString())
            }
            if (snapshot.val()?.electricityDollars) {
                setElectricityDollars(snapshot.val().electricityDollars.toString())
            }
            if (snapshot.val()?.greenPower) {
                setGreenPower(snapshot.val().greenPower.toString())
            }
            if (snapshot.val()?.fuelSpending) {
                setFuelSpending(snapshot.val().fuelSpending.toString())
            }
            if (snapshot.val()?.propaneSpending) {
                setPropaneSpending(snapshot.val().propaneSpending.toString())
            }
        });
    }, [naturalGasDollars, electricityDollars, greenPower, fuelSpending, propaneSpending]);

    const handleSubmit = () => {
        const db = database;
        set(ref(db, 'users/' + username + '/energy/'), {
            naturalGasDollars: parseInt(naturalGasDollars),
            electricityDollars: parseInt(electricityDollars),
            greenPower: parseInt(greenPower),
            fuelSpending: parseInt(fuelSpending),
            propaneSpending: parseInt(propaneSpending),
            e_emissions: 3071 / 23 * parseInt(naturalGasDollars)
                + 5455 / 44 * parseInt(electricityDollars) * (1 - parseInt(greenPower) / 100)
                + 4848 / 72 * parseInt(fuelSpending)
                + 4848 / 72 * parseInt(propaneSpending)
        });
        navigation.navigate('ModifyHouse', { username: username })
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
        <KeyboardAvoidingView
            style={houseStyles.keycontain}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
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
            <Button
                title="Submit"
                onPress={handleSubmit}
                color="blue"

            />
        </KeyboardAvoidingView>
    )
}

const HousePage = ({ navigation }) => {
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
    keycontain: {
        flex: 0.99,
        // backgroundColor: 'lightblue',
    },
    inner: {
        flex: 1,
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