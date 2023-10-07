import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{ flex: 0.15, backgroundColor: 'lightgreen' }}>
      <Text style={{ padding: 40, fontSize: 30, color: 'black', textAlign: 'center' }}>
        cong-app
      </Text>
    </View>
  );
}

export default Header;