import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue, set } from "firebase/database";
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
        const totalEmissions = snapshot.val().emissions.total.toFixed(0);
        setEmissions('Your total CO2 emissions: \n' + totalEmissions.toString() + ' lbs/year');
      } else {
        setEmissions('Please enter your information in the House tab and press Calculate')
      }
    });
  }, [name, emissions]);


  const calculate = () => {
    let total = 0
    const db = database;
    onValue(ref(db, 'users/' + username + '/energy/'), (snapshot) => {
      total += snapshot.val()?.e_emissions
    });
    onValue(ref(db, 'users/' + username + '/vehicles/'), (snapshot) => {
      total += snapshot.val()?.v_emissions
    });
    onValue(ref(db, 'users/' + username + '/waste/'), (snapshot) => {
      total += snapshot.val()?.w_emissions
    });
    set(ref(db, 'users/' + username + '/emissions/'), {
      total: total
    });
  };

  return (
    <View style={homeStyles.container}>

      <Image
        style={styles.tinyLogo}
        source={require('../Carbon-Blueprint-logos/Carbon-Blueprint-logos_transparent.png')}
      />
      <Text style={homeStyles.text}>Hello {name}!</Text>
      <TouchableOpacity
        style={buttonStyles.button}
        title="Edit House Info"
        onPress={() => navigation.navigate('ModifyHouse', { username: username })}
      >
        <Text style={buttonStyles.buttonText}>  House  </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyles.button}

        onPress={() => navigation.navigate('Improve', { username: username })}
      >
        <Text style={buttonStyles.buttonText}> Improve </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyles.button}
        onPress={calculate}
      >
        <Text style={buttonStyles.buttonText}>Calculate</Text>
      </TouchableOpacity>


      {/* <TouchableOpacity
        style={buttonStyles.button}
        onPress={() => navigation.navigate('Spending', { username: username })}
      >
        <Text style={buttonStyles.buttonText}>Spending</Text>
      </TouchableOpacity> */}
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
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 5,
    height: 20,
    resizeMode: 'stretch',
  },

  tinyLogo: {
    width: 300,
    height: 250,
  },
});
export default HomePage;