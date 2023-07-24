import { combineReducers, configureStore } from '@reduxjs/toolkit';
import clientReducer from './reducers/ClientsSlice';
import modalReducer from './reducers/ModalSlice';

const rootReducer = combineReducers({
  clientReducer,
  modalReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
