/**
 * This componenets used to display order list for the site manager
 */
import {React, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {orderGetAll} from '../../api/OrderApi';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ViewOrders() {
  const Navigation = useNavigation();

  const [order, setOrder] = useState([]);
  const [recieveStatus, setRecieveStatus] = useState('Not Recived');

  useEffect(() => {
    retriveOrders();
  }, []);

  const retriveOrders = () => {
    orderGetAll()
      .then(result => {
        setOrder(result.data.existingTenders);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //When user press a particular order that redirect to more details screnn of the particular order
  const onPressOrder = order_id => {
    const data = {
      orderId: order_id,
    };

    Navigation.navigate('ViewOrderDetails', data);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Order List</Text>

        {order.map((order, index) => {
          return (
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() => {
                onPressOrder(order._id);
              }}>
              <View style={styles.orderListSection}>
                <View style={styles.orderTitle}>
                  <Text style={styles.sectionHeader}>
                    {' '}
                    #O00{index + 1} - {order.site}
                  </Text>
                </View>
              </View>
              <Text style={styles.orderDetails}>
                Order Date - {order.createdDate}
              </Text>

              <View style={styles.statusSection}>
                <Text style={styles.statusText}>{recieveStatus}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffdead',
  },
  pageTitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemBox: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 150,
    marginBottom: 15,
    borderRadius: 20,
  },
  orderListSection: {
    alignItems: 'center',
    padding: 10,
  },
  orderTitle: {
    alignItems: 'center',
    marginTop: 8,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  orderDetails: {
    marginLeft: 10,
  },

  statusSection: {
    width: 150,
    height: 25,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  statusText: {},
  statusButton: {
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
  },
});
