/* eslint-disable dot-notation */
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './ducks';

function setupStore() {
  const store = configureStore({
    reducer: { auth: authReducer, ducks: { test: () => ({ test: 'test' }) } },
    // middleware: [...middlewares],
  });

  return store;
}

const store = setupStore();

export default store;
