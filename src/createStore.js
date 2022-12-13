/* eslint-disable dot-notation */
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import domain from './ducks';

export const reducers = combineReducers({ domain, test2: domain });

function setupStore() {
  const middlewares = [];
  middlewares.push(thunk.withExtraArgument({}));

  const store = configureStore({ reducer: reducers, middleware: middlewares });

  return store;
}

export const store = setupStore();
