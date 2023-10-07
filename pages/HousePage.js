import { View, Text, ScrollView } from 'react-native';

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
        <ScrollView style={{ padding: 20, backgroundColor: 'lightcyan'}}>
            <Text style={{ fontSize: 20 }}>
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
        <View style={{ flex: 0.8 }}>
            <Text style={{ padding: 20, fontSize: 30, flexWrap: 'wrap', textAlign: 'center' }}>
                House Properties
            </Text>
            <Inputs />
        </View>
    )
}

export default HousePage;