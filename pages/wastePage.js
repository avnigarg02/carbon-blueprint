import React, { useState } from 'react';
import { StyleSheet, Switch,Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Inputs = () => {

  const [cans, setCans] = useState(false);
  const toggleCans = () => setCans(previousState => !previousState);

  const [plastic, setPlastic] = useState(false);
  const togglePlastic = () => setPlastic(previousState => !previousState);

  const [glass, setGlass] = useState(false);
  const toggleGlass = () => setGlass(previousState => !previousState);

  const [newspaper, setNewspaper] = useState(false);
  const toggleNewspaper = () => setNewspaper(previousState => !previousState);

  const [magazines, setMagazines] = useState(false);
  const toggleMagazines = () => setMagazines(previousState => !previousState);

  return (
    <ScrollView indicatorStyle="navy" style={houseStyles.scrollContainer}>
      <View style={houseStyles.inputRow}>
      <Text style={houseStyles.itemText}>Which of the folowing products do you recycle in your household? {'\n'}</Text>

        <View style={houseStyles.inputContainer}>
            <Text style={houseStyles.itemText}>Aluminum and steel cans</Text>
            

          <Switch
            sytle = {houseStyles.input}
            onValueChange={toggleCans}
            value={cans}
            />
            <Text>{'\n'}</Text>
        </View>
        <View style={houseStyles.inputContainer}>
            <Text style={houseStyles.itemText}>Plastic</Text>

          <Switch
            sytle = {houseStyles.input}
            onValueChange={togglePlastic}
            value={plastic}
            />
            <Text>{'\n'}</Text>
        </View>
        <View style={houseStyles.inputContainer}>
            <Text style={houseStyles.itemText}>Glass</Text>

          <Switch
            sytle = {houseStyles.input}
            onValueChange={toggleGlass}
            value={glass}
            />
            <Text>{'\n'}</Text>

        </View>
        <View style={houseStyles.inputContainer}>
            <Text style={houseStyles.itemText}>Newspaper</Text>

          <Switch
            sytle = {houseStyles.input}
            onValueChange={toggleNewspaper}
            value={newspaper}
            />
            <Text>{'\n'}</Text>

        </View>
        <View style={houseStyles.inputContainer}>
            <Text style={houseStyles.itemText}>Magazines</Text>

          <Switch
            sytle = {houseStyles.input}
            onValueChange={toggleMagazines}
            value={magazines}
            />
            <Text>{'\n'}</Text>
        </View>
      </View>
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