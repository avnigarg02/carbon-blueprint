import { Switch, TextInput, ScrollView, StyleSheet, View, Button, Text } from 'react-native';

const HomePage = ({ navigation }) => {
    const handleSubmit = () => {

        navigation.navigate('Home')

    };
    return (
        <ScrollView indicatorStyle="navy" style={houseStyles.scrollContainer}>
            <View style={houseStyles.inputRow}>
                <Text style={[houseStyles.itemText]}>How you can reduce your emissions{'\n'}</Text>

                <View style={houseStyles.inputContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={houseStyles.itemText}>Reduce Vehicle 1 mileage by </Text>

                        <TextInput keyboardType="number-pad" style={houseStyles.input} placeholder="#" />

                    </View>
                    <Text style={houseStyles.itemText}>miles per week. Will you take this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>

                <View style={houseStyles.inputContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={houseStyles.itemText}>Reduce Vehicle 2 mileage by </Text>

                        <TextInput keyboardType="number-pad" style={houseStyles.input} placeholder="#" />

                    </View>
                    <Text style={houseStyles.itemText}>miles per week. Will you take this action?</Text>
                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Will you perform regular maintenance on your vehicle?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Replace Vehicle 1 with one that gets more MPG. Will you perform this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Replace Vehicle 2 with one that gets more MPG. Will you perform this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={houseStyles.itemText}>Turn down heating thermostat by </Text>

                        <TextInput keyboardType="number-pad" style={houseStyles.input} placeholder="#" />

                    </View>
                    <Text style={houseStyles.itemText}>miles per week. Will you take this action?</Text>
                    <Switch />
                    <Text>{'\n'}</Text>
                </View>
                <View style={houseStyles.inputContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={houseStyles.itemText}>Turn up AC thermostat by </Text>

                        <TextInput keyboardType="number-pad"
                            style={houseStyles.input} placeholder="#" />

                    </View>
                    <Text style={houseStyles.itemText}>miles per week. Will you take this action?</Text>
                    <Switch />
                    <Text>{'\n'}</Text>
                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Enable sleep feature on your computer and monitor. Will you take this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>

                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Wash clothes in cold instead of hot water. Will you take this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>

                    <Text style={houseStyles.itemText}>Enter the number of loads you do per week:</Text>

                    <TextInput keyboardType="number-pad" style={houseStyles.input} placeholder="#" />


                    <Text>{'\n'}</Text>
                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Use a clothes line or drying rack for 50% of your laundry, instead of your dryer. Will you take this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={houseStyles.itemText}>Substitute </Text>

                        <TextInput keyboardType="number-pad" style={houseStyles.input} placeholder="%" />

                    </View>
                    <Text style={houseStyles.itemText}>percent of your household's current electricity use with Green Power. Will you take this action? </Text>
                    <Switch />
                    <Text>{'\n'}</Text>
                </View>
                <View style={houseStyles.inputContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={houseStyles.itemText}>Replace </Text>

                        <TextInput keyboardType="number-pad" style={houseStyles.input} placeholder="%" />

                    </View>
                    <Text style={houseStyles.itemText}>60-watt incandescent light bulbs with 13-watt ENERGY STAR lights. Will you take this action? </Text>
                    <Switch />
                    <Text>{'\n'}</Text>
                </View>

                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Replace your household's old refrigerator with an ENERGY STAR model. Will you take this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Replace old gas or oil furnace or boiler with an ENERGY STAR model. Will you take this action? </Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>

                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}>Replace single-pane windows with ENERGY STAR windows. Will you take this action?</Text>

                    <Switch />
                    <Text>{'\n'}</Text>

                </View>
                <View style={houseStyles.inputContainer}>
                    <Text style={houseStyles.itemText}> Are you willing to start recycling the material(s) you don't currently recycle (such as newspaper, glass, plastic, metal and magazines)? </Text>

                    <Switch />
                </View>

            </View>
            <Button
                title="Submit"
                onPress={handleSubmit}

                color="blue"
            />
            <Text>{'\n'}</Text>

        </ScrollView>
    )
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    text1: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    text2: {
        padding: 20,
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    }
});


const houseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    inner: {
        flex: 0.98,
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
        fontSize: 20,
        margin: 0,
    },
    input: {
        height: 40,
        marginBottom: 0,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        width: 50,
        borderColor: 'black',
        backgroundColor: 'azure',
        height: 20,
        type: 'number-pad',
    }
});

export default HomePage;