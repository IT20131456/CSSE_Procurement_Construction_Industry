import ApiManager from './ApiManeger';
import {USER_LOGIN_PATH} from '../constants/api/RestApi.const';

export const userLogin = async data => {
  try {
    const result = await ApiManager(USER_LOGIN_PATH, {
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
