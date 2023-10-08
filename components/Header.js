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
    flex: 0.15,
    backgroundColor: 'lightgreen',
  },
  headerText: {
    padding: 40, 
    fontSize: 30, 
    color: 'black', 
    textAlign: 'center'
  }
});

export default Header;