import { View, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={{ backgroundColor: 'lightgreen', marginBottom: 10}}>
      <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
        Created for the Congressional App Challenge
      </Text>
    </View>
  );
}

export default Footer;