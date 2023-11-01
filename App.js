import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/HomePage';
import ModifyHousePage from './pages/ModifyHousePage.js';
import LoginPage from'./pages/LoginPage';
import SpendingPage from'./pages/SpendingPage';
import HousePage from'./pages/HousePage';
import ThermostatPage from'./pages/ThermostatPage';
import SignupPage from './pages/SignupPage';
import GeneralInfoPage from './pages/GeneralInfoPage';
import HomeEnergyPage from './pages/HomeEnergyPage';
import householdVehiclesPage from './pages/householdVehiclesPage';
import wastePage from './pages/wastePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage}  /> 
          <Stack.Screen name="Home" component={HomePage} 
          options={{ title: 'Home', headerLeft: () => (
            <Button
              onPress={() => alert('Info button test')}
              title="Info"
            />
          ),}}/>
          <Stack.Screen name="ModifyHouse" component={ModifyHousePage} options={{title:"House Settings"}} />
          <Stack.Screen name="Spending" component={SpendingPage} options={{title:"Spending"}} /> 
          <Stack.Screen name="House" component={HousePage} options={{title:"House"}} />
          <Stack.Screen name="Thermostat" component={ThermostatPage} options={{title:"Thermostat"}} />
          <Stack.Screen name="Signup" component={SignupPage} options={{title:"Signup"}} />
          <Stack.Screen name="HomeEnergy" component={HomeEnergyPage} options={{title:"Home Energy"}} />
          <Stack.Screen name="HouseholdVehicles" component={householdVehiclesPage} options={{title:"Household Vehicles"}} />
          <Stack.Screen name="Waste" component={wastePage} options={{title:"Waste"}} />
          <Stack.Screen name="GeneralInfo" component={GeneralInfoPage} options={{title:"General Info"}} />


        </Stack.Navigator>
      </NavigationContainer>

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
