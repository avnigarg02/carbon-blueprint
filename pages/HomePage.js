import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"

const HomePage = ({ navigation }) => {

  const route = useRoute()
  const username = route.params?.username
  const [name, setName] = useState('');
  const [emissions, setEmissions] = useState('');

  useEffect(() => {
    const db = database;
    onValue(ref(db, 'users/' + username + '/'), (snapshot) => {
      setName(snapshot.val()?.name)
      if (snapshot.val()?.emissions) {
        setEmissions('Your CO2 emissions:' + snapshot.val().emissions)
      } else {
        setEmissions('Please enter your information in the House tab')
      }
    });
  }, [name, emissions]);

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.text}>Hello {name}!</Text>
      <TouchableOpacity
        style={buttonStyles.button}
        onPress={() => navigation.navigate('House')}
      >
        <Text style={buttonStyles.buttonText}>House</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyles.button}
        onPress={() => navigation.navigate('Spending')}
      >
        <Text style={buttonStyles.buttonText}>Spending</Text>
      </TouchableOpacity>
      {/* <Text style={homeStyles.text}>Your total CO2 usage:</Text> */}
      <Text style={homeStyles.text}>{emissions}</Text>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});

export default HomePage;