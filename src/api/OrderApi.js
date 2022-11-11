import ApiManager from './ApiManeger';
import {
  ORDER_ADD_PATH,
  ORDER_GET_ALL_PATH,
  ORDER_GET_BY_ID_PATH,
  RECIVED_ORDER_ADD_PATH,
} from '../constants/api/RestApi.const';

// Order REST Api's
export const orderGetAll = async () => {
  try {
    const result = await ApiManager(ORDER_GET_ALL_PATH, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const orderSave = async data => {
  try {
    const result = await ApiManager(ORDER_ADD_PATH, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const orderGetById = async data => {
  try {
    const result = await ApiManager(ORDER_GET_BY_ID_PATH + data.orderId, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

// Recived Order Api's
export const receviedOrderSave = async data => {
  try {
    const result = await ApiManager(RECIVED_ORDER_ADD_PATH, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
