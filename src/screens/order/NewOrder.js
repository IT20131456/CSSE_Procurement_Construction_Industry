import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Background from '../../components/auth/Background';
import TextInput from '../../components/auth/TextInput';

export const NewOrder = ({ navigation }) => {

    // todo: change this later to drop down with retrieved data from database
    const [itemName, setItemName] = React.useState({ value: '', error: '' });
    const [quantity, setQuantity] = React.useState({ value: '', error: '' });
    const [size, setSize] = React.useState({ value: '', error: '' });
    const [unitPrice, setUnitPrice] = React.useState({ value: '', error: '' });
    const [totalPrice, setTotalPrice] = React.useState({ value: '', error: '' });

    useState(() => {
        setTotalPrice({ value: (quantity.value * unitPrice.value).toString() });
    }, [quantity.value, unitPrice.value]);

    const onOrderPressed = () => {
        // todo: add validation
        let itemNameError = true;
        let sizeError = true;
        let quantityError = true;
        let unitPriceError = true;
        let totalPriceError = true;

        if (itemName === '') {
            setItemName({ ...itemName, error: 'Item name cannot be empty' });
        }
        else if (quantity === '') {
            setQuantity({ ...quantity, error: 'Quantity cannot be empty' });
        }
        else if (unitPrice === '') {
            setUnitPrice({ ...unitPrice, error: 'Cannot find the unit price' });
        }
        else if (totalPrice === '') {
            setTotalPrice({ ...totalPrice, error: 'Total cannot be calculated' });
        }
        else if (size === '') {
            setSize({ ...size, error: 'Size cannot be empty' });
        }
        else {
            itemNameError = false;
        }

        if (itemNameError || quantityError || unitPriceError || totalPriceError || sizeError) {
            Alert.alert('Error', 'Please check the fields again', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        else {
            navigation.navigate('Home')
        }
    }

    return (
        <Background>
            <SafeAreaView>
                <ScrollView>
                    <TextInput
                        label="Item Name"
                        returnKeyType="next"
                        value={itemName.value}
                        onChangeText={(text) => setItemName({ value: text, error: '' })}
                        error={!!itemName.error}
                        errorText={itemName.error}
                        autoCapitalize="none"
                        autoCompleteType="text"
                        textContentType="text"
                        keyboardType="text"
                    />
                    <TextInput
                        label="Size"
                        returnKeyType="next"
                        value={size.value}
                        onChangeText={(text) => setSize({ value: text, error: '' })}
                        error={!!size.error}
                        errorText={size.error}
                        autoCapitalize="none"
                        autoCompleteType="text"
                        textContentType="text"
                        keyboardType="text"
                    />
                    <TextInput
                        label="Quantity"
                        returnKeyType="next"
                        value={quantity.value}
                        onChangeText={(number) => setQuantity({ value: number, error: '' })}
                        error={!!quantity.error}
                        errorText={quantity.error}
                        autoCapitalize="none"
                        autoCompleteType="number"
                        textContentType="number"
                        keyboardType="numeric"
                    />
                    <TextInput
                        label="Unit Price"      
                        returnKeyType="next"
                        value={unitPrice.value}
                        onChangeText={(number) => setUnitPrice({ value: number, error: '' })}
                        error={!!unitPrice.error}
                        errorText={unitPrice.error}
                        autoCapitalize="none"
                        autoCompleteType="number"
                        textContentType="number"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onOrderPressed()}
                    >
                        <Text style={styles.text}>Add Order</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        </Background>
    )
}

const styles = StyleSheet.create({
    button: {
        minWidth: 300,
        marginVertical: 20,
        paddingVertical: 2,
        backgroundColor: '#FFA500',
        color: 'black',
        borderRadius: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
        textAlign: 'center',
    },
})