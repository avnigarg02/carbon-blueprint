import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Switch, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { ref, set, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"

const Inputs = ({ navigation }) => {

  const route = useRoute()
  const username = route.params?.username

  const [v1miles, setv1miles] = useState('');
  const [v1mpg, setv1mpg] = useState('21.6');
  const [v2miles, setv2miles] = useState('');
  const [v2mpg, setv2mpg] = useState('21.6');
  const [regMaintenance, setRegMaintenance] = useState(false);

  useEffect(() => {
    const db = database;
    onValue(ref(db, 'users/' + username + '/vehicles/'), (snapshot) => {
      if (snapshot.val()?.v1miles) {
        setv1miles(snapshot.val().v1miles.toString())
      }
      if (snapshot.val()?.v1mpg) {
        setv1mpg(snapshot.val().v1mpg.toString())
      }
      if (snapshot.val()?.v2miles) {
        setv2miles(snapshot.val().v2miles.toString())
      }
      if (snapshot.val()?.v2mpg) {
        setv2mpg(snapshot.val().v2mpg.toString())
      }
      if (snapshot.val()?.regMaintenance) {
        setRegMaintenance(snapshot.val().regMaintenance)
      }
    });
  }, [v1miles, v1mpg, v2miles, v2mpg, regMaintenance]);

  const toggleSwitch = () => setRegMaintenance(previousState => !previousState);

  const handleSubmit = () => {

    const db = database;
    set(ref(db, 'users/' + username + '/vehicles/'), {
      v1miles: parseInt(v1miles),
      v1mpg: parseInt(v1mpg),
      v2miles: parseInt(v2miles),
      v2mpg: parseInt(v2mpg),
      regMaintenance: regMaintenance,
      // v_emissions: parseInt(v1miles) * 52 / parseInt(v1mpg) + parseInt(v2miles) * 52 / parseInt(v2mpg) * 10484
      v_emissions: 15719 - (regMaintenance ? 0 : 1) * 650
    });
    navigation.navigate('ModifyHouse', { username: username })

  };

  return (
    <ScrollView indicatorStyle="navy" style={houseStyles.scrollContainer}>
      <View style={houseStyles.inputRow}>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Vehicle 1: Miles driven in past week</Text>
          <TextInput
            value={v1miles}
            onChangeText={setv1miles}
            keyboardType="number-pad"
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
          />
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Vehicle 2: Miles driven in past week</Text>
          <TextInput
            value={v2miles}
            onChangeText={setv2miles}
            keyboardType="number-pad"
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
          />
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Do you perform regular maintenance on your vehicle?</Text>
          <Text style={houseStyles.smallText}>Regular maintenance includes: keeping your engine properly tuned and tires properly inflated</Text>
          <Text style={houseStyles.itemText}>{regMaintenance ? 'Yes' : 'No'}</Text>
          <Switch
            sytle={houseStyles.input}
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
  smallText: {
    fontSize: 14,
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