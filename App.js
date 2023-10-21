import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ModifyHousePage from './pages/ModifyHousePage';
import LoginPage from'./pages/LoginPage';
import SpendingPage from'./pages/SpendingPage';
import HousePage from'./pages/HousePage';
import ThermostatPage from'./pages/ThermostatPage';
import SignupPage from './pages/SignupPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage}  /> 
          <Stack.Screen name="Home" component={HomePage} 
          options={{ title: 'Home' ,headerLeft: () => (
            <Button
              onPress={() => alert('Info button test')}
              title="Info"
            />
          ),}}/>
          <Stack.Screen name="ModifyHouse" component={ModifyHousePage} />
          <Stack.Screen name="Spending" component={SpendingPage}  /> 
          <Stack.Screen name="House" component={HousePage} />
          <Stack.Screen name="Thermostat" component={ThermostatPage} />
          <Stack.Screen name="Signup" component={SignupPage} />


        </Stack.Navigator>
      </NavigationContainer>

      {/* <View style={styles.container}>
        <Header />
        <HousePage />
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View> */}

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  footerContainer: {
    backgroundColor: 'lightblue'
  }
});
