import React from 'react';
import {LoginContext, LoginProvider} from './common/LoginContext';

const ContextManager = (props) => {
  return <LoginProvider>{props.children}</LoginProvider>;
};
export {LoginContext, LoginProvider, ContextManager};
