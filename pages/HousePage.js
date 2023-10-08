import { StyleSheet, View, Text, ScrollView } from 'react-native';

const properties = [
    'Number of People in Household',
    'Zip Code',
    'House Size',
    'Type of Housing',
    'Energy Source',
    'Energy consupmtion per month',
    'Primary form of transportation',

]

const Inputs = () => {
    return (
        <ScrollView indicatorStyle={"navy"} style={houseStyles.scrollContainer}>
            <Text style={houseStyles.itemText}>
                {properties.map((property) => (
                    <Text key={property}>
                        {property + '\n'}
                    </Text>
                ))}
            </Text>
        </ScrollView>
    )
}

const HousePage = () => {
    return (
        <View style={houseStyles.container}>
            <Text style={houseStyles.titleText}>
                House Properties
            </Text>
            <Inputs />
        </View>
    )
}

const houseStyles = StyleSheet.create({
    container: {
        flex: 0.8
    },
    scrollContainer: {
        padding: 20,
        backgroundColor: 'lightcyan'
    },
    titleText: {
        padding: 20, 
        fontSize: 30, 
        flexWrap: 'wrap', 
        textAlign: 'center'
    },
    itemText: {
        fontSize: 20
    }
  });

export default HousePage;