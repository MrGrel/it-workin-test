import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModalState, IOpenModalPayLoad } from '../../types/CrmTypes';

const initialState: IModalState = {
  client: null,
  isOpenModal: false,
  isOpenModalSubmit: false,
};

export const modalSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IOpenModalPayLoad>) {
      state.client = action.payload.client;
      if (action.payload.isSubmiting) {
        state.isOpenModalSubmit = true;
      } else {
        state.isOpenModal = true;
      }
    },
    closeAllModal(state) {
      state.client = null;
      state.isOpenModal = false;
      state.isOpenModalSubmit = false;
    },
    closeSubmitModal(state) {
      state.isOpenModalSubmit = false;
    },
  },
});

export default modalSlice.reducer;
