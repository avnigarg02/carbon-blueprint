import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Home from './pages/Home';
import House from './pages/House';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HousePage from './pages/HousePage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="House" component={House} />
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
