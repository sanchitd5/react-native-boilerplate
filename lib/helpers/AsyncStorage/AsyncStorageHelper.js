import AsyncStorage from '@react-native-community/async-storage';

class AsyncStorageHelper {
  getString = async (key) => {
    try {
      const value = await AsyncStorage.getItem(`@${key}`);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  };

  getJSON = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@${key}`);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return null;
    }
  };

  storeString = async (key, value) => {
    try {
      await AsyncStorage.setItem(`@${key}`, String(value));
    } catch (e) {
      return null;
    }
  };

  storeJSONData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@${key}`, jsonValue);
    } catch (e) {
      return null;
    }
  };

  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Error Clearing');
    }
    console.log('Done.');
  };
}

const instance = new AsyncStorageHelper();
export default instance;
