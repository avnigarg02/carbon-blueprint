import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.footerText}>
                Created for the Congressional App Challenge
            </Text>
        </View>
    );
}

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        marginBottom: 10
    },
    footerText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
    }
});

export default Footer;