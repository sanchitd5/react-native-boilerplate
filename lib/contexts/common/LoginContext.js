import React, {createContext, useState, useEffect, useCallback} from 'react';
import AsyncStorageHelper from '../../helpers/AsyncStorage/AsyncStorageHelper';
export const LoginContext = createContext();
LoginContext.displayName = 'LoginContext';

export const LoginProvider = (props) => {
  const {children} = props;

  const [loginStatus, _setLoginStatus] = useState();
  const [accessToken, _setAccessToken] = useState();

  const setLoginStatus = async (data) => {
    await AsyncStorageHelper.storeString('loginStatus', data);
    _setLoginStatus(data);
  };

  const setAccessToken = async (data) => {
    await AsyncStorageHelper.storeString('accessToken', data);
    _setAccessToken(data);
  };

  const initApplication = useCallback(async () => {
    let result = await AsyncStorageHelper.getString('accessToken');
    return _setAccessToken(result);
  }, []);

  useEffect(() => {
    initApplication();
  }, [initApplication]);

  useEffect(() => {
    if (!accessToken) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [accessToken]);

  const logoutUser = useCallback(() => {
    setAccessToken('');
  }, []);

  return (
    <LoginContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        accessToken,
        setAccessToken,
        logoutUser,
      }}>
      {children}
    </LoginContext.Provider>
  );
};
