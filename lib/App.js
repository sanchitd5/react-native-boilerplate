/**
 * Created By Sanchit Dang
 * Date : 11/07/2020
 */

import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import Routes from './routes/Routes.js';
import { Root } from 'native-base';
import { FontLoader } from "./helpers";

import { ContextManager } from './contexts/index.js';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    FontLoader.loadFonts();
  }, []);
  return (
    <Root>
      <ContextManager>
        <Routes />
      </ContextManager>
    </Root>
  );
};

export default App;
