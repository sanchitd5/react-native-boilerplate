import axios from 'axios';
import {Toast} from 'native-base';
import Configuations from '../../configurations/configurations';

class AxiosInstance {
  axiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: Configuations.axiosOptions.backendUrl + '/api/',
      timeout: Configuations.axiosOptions.timeout,
    });
  }

  notify = (text) => {
    console.log(text);
    Toast.show({
      text: text,
      type: 'danger',
    });
  };

  /**
   * @author Sanchit Dang
   * @param {any} data Response to send
   * @returns {Object}
   */
  generateSuccess = (data) => {
    return {
      success: true,
      data: data,
    };
  };

  /**
   * @author Sanchit Dang
   * @param {String} errorMessage Error Message
   * @returns {Object}
   */
  generateError = (errorMessage) => {
    return {
      success: false,
      data: errorMessage,
    };
  };

  /**
   * @author Sanchit Dang
   * @param {String} errorMessage Error Message
   * @returns {Object}
   */
  generateErrorAndNotify = (errorMessage) => {
    this.notify(errorMessage);
    return {
      success: false,
      data: errorMessage,
    };
  };
  /**
   * @author Sanchit Dang
   * @description Error Helper
   *
   * @param {any} error
   * @param {String} variant
   * @returns {Object}
   */
  errorHelper = (error, variant) => {
    if (error.response === undefined) {
      return this.generateErrorAndNotify('Network Error');
    }
    if (error.response.statusCode === 401) {
      if (variant === 'login') {
        return this.generateErrorAndNotify('Invalid Credentials');
      }
      return this.generateErrorAndNotify('You may have been logged out');
    }
    if (error.response.data.statusCode === 401) {
      if (variant === 'login') {
        return this.generateErrorAndNotify('Invalid Credentials');
      }
      return this.generateErrorAndNotify('You may have been logged out');
    }
    if (error.response.status === 401) {
      if (variant === 'login') {
        return this.generateErrorAndNotify('Invalid Credentials');
      }
      return this.generateErrorAndNotify('You may have been logged out');
    }
    if (error.response.data.message !== '') {
      return this.generateErrorAndNotify(error.response.data.message);
    }
    if (error.response.statusText !== '') {
      return this.generateErrorAndNotify(error.response.statusText);
    }
  };

  performCallback = (callback, data) => {
    if (callback instanceof Function) {
      if (data !== undefined) {
        return callback(data);
      }
      callback();
    }
  };
}

const instance = new AxiosInstance();
export default instance;
