import React, { useState } from 'react';
import { StyleSheet,Button, Switch,Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Inputs = ({navigation}) => {
  const [v1miles,setv1miles] = useState('');
  const [v1mpg, setv1mpg] = useState('');
  const [v2miles,setv2miles] = useState('');
  const [v2mpg, setv2mpg] = useState('');
  const [regMaintenance, setRegMaintenance] = useState(false);
  const toggleSwitch = () => setRegMaintenance(previousState => !previousState);
  const handleSubmit = () => {
    // You can access the form data in formData.people and formData.zip
    // Perform your storage logic here (e.g., send the data to an API, store it locally, etc.)
    navigation.navigate('ModifyHouse')

    };
  return (
    <ScrollView indicatorStyle="navy" style={houseStyles.scrollContainer}>
      <View style={houseStyles.inputRow}>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Vehicle 1: Miles driven in past week</Text>
          <TextInput
            value={v1miles}
            onChangeText={setv1miles}
            style={houseStyles.input}
          />
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Vehicle 1: MPG</Text>
          <TextInput
            value={v1mpg}
            onChangeText={setv1mpg}
            keyboardType="number-pad"
            style={houseStyles.input}
            defaultValue='21.6'
          />
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Vehicle 2: Miles driven in past week</Text>
          <TextInput
            value={v2miles}
            onChangeText={setv2miles}
            style={houseStyles.input}
          />
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Vehicle 2: MPG</Text>
          <TextInput
            value={v2mpg}
            onChangeText={setv2mpg}
            keyboardType="number-pad"
            style={houseStyles.input}
            defaultValue='21.6'
          />
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Do you perform regular maintenance on your vehicle?</Text>
          <Switch
            sytle = {houseStyles.input}
            onValueChange={toggleSwitch}
            value={regMaintenance}
            />
        </View>
      </View>
      <Button
                        title="Submit"
                        onPress={handleSubmit}
                        color="blue"
                    />
    </ScrollView>
  );
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