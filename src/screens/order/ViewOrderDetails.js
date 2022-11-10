/**
 * This compoenets used to display details about the order
 */
import {React, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import TextInput from '../../components/auth/TextInput';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  SectionList,
} from 'react-native';

export default function ViewOrderDetails() {
  const [order, setOrder] = useState([]);
  const [notReceived, setNotReceived] = useState(true);
  const [reason, setReason] = useState('');

  useEffect(() => {
    var sampleID = '636139517cb2b5e5299ef7c3';

    //Call GET methos to retice the order details
    axios
      .get(`http://192.168.56.1:5000/tender/get/636139517cb2b5e5299ef7c3`)
      .then(function (response) {
        if (response.data.success) {
          setOrder(response.data.existingTender);
        }
      })
      .catch(function (error) {
        alert('Error');
      });
  }, []);

  //If press recvied button that response send to the datbase
  const onPressReceived = () => {
    const data = {
      orderID: order._id,
    };
    axios
      .post(`http://192.168.56.1:5000/receivedOrder/add`, data)
      .then(function (response) {
        if (response.data.success) {
          alert('Saved Sucessfull');
        }
      })
      .catch(function (error) {
        alert('Error');
      });
  };

  //Id press nor received buttton that reponse send to the database
  const onPressNotReceived = () => {
    const data = {
      orderID: order._id,
      reason: reason,
    };
    axios
      .post(`http://192.168.56.1:5000/receivedOrder/add`, data)
      .then(function (response) {
        if (response.data.success) {
          alert('Saved Sucessfull');
        }
      })
      .catch(function (error) {
        alert('Error');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>#O001 - DMS Pvt Ltd</Text>

      <Text>Order Date - {order.createdDate}</Text>

      <View style={styles.orderItemContainer}>
        <View>
          <Text>cement</Text>
          <Text>Size - 2kg</Text>
          <Text>Quantity - 2</Text>
        </View>
      </View>

      <View style={styles.orderItemContainer}>
        <View>
          <Text>H beam</Text>
          <Text>Size - 44mm</Text>
          <Text>Quantity - 20</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.receivedBtn} onPress={onPressReceived}>
            <Text style={styles.mainBtnTitle}>Recevied</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.notReceivedBtn} onPress={() => {
          setNotReceived(false);
        }}>
            <Text style={styles.mainBtnTitle}>Not Recevied</Text>
      </TouchableOpacity>

      <Text></Text>

      {notReceived ? (
        <View></View>
      ) : (
        <View>
          <TextInput label="Reason" value={reason} onChangeText={setReason} style={{ width: 250,  }}/>
          <Button
            style={styles.receivedBtn}
            onPress={onPressNotReceived}
            title="Send"
            color="#008080"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffdead',
    height: '100%',
  },
  pageTitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderItemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: '95%',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },

  receivedBtn: {
    width: '50%',
    backgroundColor: '#008080',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  mainBtnTitle: {
    color: '#ffffff',
    fontSize: 18,
  },
  notReceivedBtn: {
    width: '50%',
    backgroundColor: '#ff6347',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  }
});
