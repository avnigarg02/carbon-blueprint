import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import buttonStyles from '../components/Button';

const HomePage = ({ navigation }) => {
  return (
    <View style={homeStyles.container}>
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
      <Text style={homeStyles.text2}>Your total CO2 usage:</Text>
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
  text2: {
    padding: 20,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});

export default HomePage;