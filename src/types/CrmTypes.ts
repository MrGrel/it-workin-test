export interface IClient {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  surname: string;
  lastName: string;
  contacts: IContact[];
}

export interface IFunContact {
  contacts: IContact[];
}

export interface IContact {
  type: string;
  value: string;
}

//TableCrm

export interface IClientState {
  clients: IClient[];
  isLoading: boolean;
  error: string;
}

export interface IFunCreatedAndUpdatedTime {
  created: string;
  updated: string;
}

export interface IContact {
  type: string;
  value: string;
}

export type TPayloadKeyContact = 'id' | 'surname' | 'createdAt' | 'updatedAt';

//ModalCrm

export interface IModalState {
  client: IClient | null;
  isOpenModal: boolean;
  isOpenModalSubmit: boolean;
}

export interface IOpenModalPayLoad {
  client: IClient | null;
  isSubmiting: boolean;
}

export interface IFormValues {
  id?: string;
  name: string;
  surname: string;
  lastName: string;
  contacts: IContact[];
}

//Api

export interface IFetchData {
  id: string;
  client: IFormValues;
}

//Styles
export interface ILoader {
  wh: number;
  purple?: boolean;
}

export interface IColorSortBtn {
  active: boolean;
}

export interface IOpacityPopup {
  active: boolean;
}

export interface IOpenModal {
  isOpenModal: boolean;
}

export interface IStyleAlert {
  alert: boolean;
}
