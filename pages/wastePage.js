import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Switch, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { ref, set, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"

const Inputs = ({ navigation }) => {

  const route = useRoute()
  const username = route.params?.username

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

  useEffect(() => {
    const db = database;
    onValue(ref(db, 'users/' + username + '/waste/'), (snapshot) => {
      if (snapshot.val()?.cans) {
        setCans(snapshot.val().cans)
      }
      if (snapshot.val()?.plastic) {
        setPlastic(snapshot.val().plastic)
      }
      if (snapshot.val()?.glass) {
        setGlass(snapshot.val().glass)
      }
      if (snapshot.val()?.newspaper) {
        setNewspaper(snapshot.val().newspaper)
      }
      if (snapshot.val()?.magazines) {
        setMagazines(snapshot.val().magazines)
      }
    });
  }, [cans, plastic, glass, newspaper, magazines]);

  const handleSubmit = () => {

    const db = database;
    onValue(ref(db, 'users/' + username + '/general/'), (snapshot) => {
      set(ref(db, 'users/' + username + '/waste/'), {
        pre_recycle: 173 * (snapshot.val() ? snapshot.val().people : 1),
        cans: cans,
        plastic: plastic,
        glass: glass,
        newspaper: newspaper,
        magazines: magazines,
        w_emissions: (snapshot.val() ? snapshot.val().people : 1) * (692 - (cans ? 1 : 0) * 89 - (plastic ? 1 : 0) * 25 - (glass ? 1 : 0) * 42 - (newspaper ? 1 : 0) * 113 - (magazines ? 1 : 0) * 27) / 4
      });
      navigation.navigate('ModifyHouse', { username: username })
    });

  };
  return (
    <ScrollView indicatorStyle="navy" style={houseStyles.scrollContainer}>
      <View style={houseStyles.inputRow}>
        <Text style={houseStyles.itemText}>Which of the folowing products do you recycle in your household? {'\n'}</Text>

        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Aluminum and steel cans</Text>


          <Switch
            sytle={houseStyles.input}
            onValueChange={toggleCans}
            value={cans}
          />
          <Text>{'\n'}</Text>
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Plastic</Text>

          <Switch
            sytle={houseStyles.input}
            onValueChange={togglePlastic}
            value={plastic}
          />
          <Text>{'\n'}</Text>
        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Glass</Text>

          <Switch
            sytle={houseStyles.input}
            onValueChange={toggleGlass}
            value={glass}
          />
          <Text>{'\n'}</Text>

        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Newspaper</Text>

          <Switch
            sytle={houseStyles.input}
            onValueChange={toggleNewspaper}
            value={newspaper}
          />
          <Text>{'\n'}</Text>

        </View>
        <View style={houseStyles.inputContainer}>
          <Text style={houseStyles.itemText}>Magazines</Text>

          <Switch
            sytle={houseStyles.input}
            onValueChange={toggleMagazines}
            value={magazines}
          />
          <Text>{'\n'}</Text>
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