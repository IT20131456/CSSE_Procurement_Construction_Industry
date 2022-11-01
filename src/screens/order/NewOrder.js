import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Background from '../../components/auth/Background';
import TextInput from '../../components/auth/TextInput';
import axios from 'axios';
import Logo from '../../components/auth/Logo';

export const NewOrder = ({ navigation }) => {

    // todo: change this later to drop down with retrieved data from database
    const [itemName, setItemName] = React.useState({ value: '', error: '' });
    const [quantity, setQuantity] = React.useState({ value: 0.0, error: '' });
    const [size, setSize] = React.useState({ value: '', error: '' });
    const [unitPrice, setUnitPrice] = React.useState({ value: 0.0, error: '' });
    const [totalPrice, setTotalPrice] = React.useState({ value: '', error: '' });
    const [storedItemList, setStoredItemList] = React.useState([]);

    useState(() => {
        axios.get('http://192.168.1.102:5000/itemDetails/getall').then((response) => {
            console.log(response.data);
            if (response.data.success) {
                setStoredItemList(response.data.existingItemDetails);
            }
        });
    }, []);

    const onOrderPressed = () => {
        let itemNameError = true;
        let sizeError = true;
        let quantityError = true;
        let unitPriceError = true;
        //let totalPriceError = true;

        if (itemName.value === '') {
            setItemName({ ...itemName, error: 'Item name cannot be empty' });
            itemNameError = false;
        }
        else if (quantity.value === '') {
            setQuantity({ ...quantity, error: 'Quantity cannot be empty' });
            quantityError = false;
        }
        else if (unitPrice.value === '') {
            setUnitPrice({ ...unitPrice, error: 'Cannot find the unit price' });
            unitPriceError = false;
        }
        //else if (totalPrice === '') {
        //    setTotalPrice({ ...totalPrice, error: 'Total cannot be calculated' });
        //}
        else if (size.value === '') {
            setSize({ ...size, error: 'Size cannot be empty' });
            sizeError = false;
        }
        else {
            itemNameError = false;
            quantityError = false;
            unitPriceError = false;
            sizeError = false;
        }

        if (itemNameError || quantityError || unitPriceError || sizeError) {
            Alert.alert('Error', 'Please check the fields again', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        else {
            setTotalPrice({ value: (quantity.value * unitPrice.value).toString() });
            console.log(itemName.value + " -> " + itemName.error + " -> " + itemNameError);
            console.log(quantity.value + " -> " + quantity.error + " -> " + quantityError);
            console.log(unitPrice.value + " -> " + unitPrice.error + " -> " + unitPriceError);
            //console.log(totalPrice.value + " -> " + totalPrice.error);
            console.log(size.value + " -> " + size.error + " -> " + sizeError);
            const order = {
                siteManagerID: "U0001",
                siteManagerName: "Silva",
                items: {
                    name: itemName.value,
                    size: size.value,
                    quantity: quantity.value,
                    unitPrice: unitPrice.value,
                    orderStatus: "Pending",
                    receivedAmount: 0,
                    updatedDate: new Date().toString()
                },
                status: "Waiting for a supplier",
                expectedBudget: totalPrice.value,
                acceptedSupplier: "",
                actualAmount: 0.0,
                createdDate: new Date().toString(),
            }

            console.log(order);
            axios.post('http://192.168.1.102:5000/tender/add', order)
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        alert("Successfully added the order");
                        setTimeout(() => {
                            navigation.navigate('Home');
                        }, 2000)

                    }
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Creating record failed");
                });
        }
    }

    return (
        <ScrollView>
            <Background>
                <Logo />
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
                    onPress={() => { onOrderPressed() }}
                >
                    <Text style={styles.text}>Add Order</Text>
                </TouchableOpacity>
            </Background>
        </ScrollView>
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