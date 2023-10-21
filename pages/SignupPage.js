import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    StyleSheet,
    Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>


      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );


const SignupPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
   
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={loginStyles.container}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={loginStyles.inner}
                >
                    <Text style={loginStyles.loginText}>
                        Login
                    </Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Username'
                        onChangeText={setUsername}
                        value={username}
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Email'
                        onChangeText={setEmail}
                        value={username}
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Password'
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <Button
                        title="Submit"
                        onPress={() => navigation.navigate('Login')}
                    />   
                          


                </KeyboardAvoidingView>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    inner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    footerContainer: {
        backgroundColor: 'lightblue'
    },
    loginText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        paddingBottom: 20
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

export default SignupPage;