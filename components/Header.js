import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        cong-app
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'lightgreen',
  },
  headerText: {
    padding: 50, 
    fontSize: 30, 
    color: 'black', 
    textAlign: 'center'
  }
});

export default Header;