import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';

const Inputs = () => {
    const [people, setPeople] = useState('');
    const [zip, setZip] = useState('');
    const [size, setSize] = useState('');
    const [type, setType] = useState('');
    const [source, setSource] = useState('');
    const [consumption, setConsumption] = useState('');
    const [transportation, setTransportation] = useState('');

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
        {
            text: 'House Size (in square feet)',
            id: 'size', state: size,
            onChangeState: setSize,
            type: 'decimal-pad',
        },
        {
            text: 'Type of Housing',
            id: 'type', state: type,
            onChangeState: setType
        },
        {
            text: 'Energy Source',
            id: 'source', state: source,
            onChangeState: setSource
        },
        {
            text: 'Energy consupmtion per month',
            id: 'consumption', state: consumption,
            onChangeState: setConsumption,
            type: 'decimal-pad',
        },
        {
            text: 'Primary form of transportation',
            id: 'transportation', state: transportation, 
            onChangeState: setTransportation
        },
    ]

    return (
        <ScrollView indicatorStyle={"navy"} style={houseStyles.scrollContainer}>
            {questions.map((question) => (
                <>
                    <Text key={question.id} style={houseStyles.itemText}>
                        {question.text + '\n'}
                    </Text>
                    <TextInput
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

const HousePage = () => {
    return (
        <View style={houseStyles.container}>
            <Text style={houseStyles.titleText}>
                House Properties
            </Text>
            <Inputs />
        </View>
    )
}

const houseStyles = StyleSheet.create({
    container: {
        flex: 0.85
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