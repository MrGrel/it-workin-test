import { IClient, IClientState, IFormValues } from '../../types/CrmTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TPayloadAction = 'id' | 'surname' | 'createdAt' | 'updatedAt';

const initialState: IClientState = {
  clients: [],
  isLoading: true,
  error: '',
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    clietToAscending(state, action: PayloadAction<TPayloadAction>) {
      state.clients = state.clients.sort((a, b) => {
        if (a[action.payload] > b[action.payload]) {
          return -1;
        } else {
          return 1;
        }
      });
    },

    clietToDescending(state, action: PayloadAction<TPayloadAction>) {
      state.clients = state.clients.sort((a, b) => {
        if (a[action.payload] > b[action.payload]) {
          return 1;
        } else {
          return -1;
        }
      });
    },

    addNewClient(state, action: PayloadAction<IFormValues>) {
      const date = new Date().toString();
      let id = 1000;

      state.clients.forEach((client) => {
        if (Number(client.id) === id) {
          id = Number(client.id) + 1;
        }
      });

      const newClient: IClient = {
        id: id.toString(),
        name: action.payload.name,
        surname: action.payload.surname,
        lastName: action.payload.lastName ? action.payload.lastName : '',
        createdAt: date,
        updatedAt: date,
        contacts: action.payload.contacts,
      };

      state.clients.unshift(newClient);
    },

    changeClient(state, action: PayloadAction<IFormValues>) {
      const date = new Date().toDateString();

      if (action.payload.id) {
        state.clients = state.clients.map((client) => {
          if (action.payload.id === client.id) {
            return {
              ...client,
              name: action.payload.name,
              surname: action.payload.surname,
              lastName: action.payload.lastName,
              updatedAt: date,
              contacts: action.payload.contacts,
            };
          }
          return client;
        });
      }
    },

    removeClient(state, action: PayloadAction<string>) {
      let rmIndex = 0;

      state.clients.forEach((client, index) => {
        if (client.id === action.payload) {
          rmIndex = index;
        }
      });

      state.clients.splice(rmIndex, rmIndex + 1);
    },
  },
});

export default clientSlice.reducer;
