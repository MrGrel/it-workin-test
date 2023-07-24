import { useEffect, useState } from 'react';

import { arrowBottomSvg, arrowTopSvg, changeSvg, removeClientSvg } from './TableCrmSvg';
import { TdCrmContacts } from './TdCrmContacts';
import { TdCrmCreatedAndUpdatedTime } from './TdCrmCreatedAndUpdatedTime';
import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { clientSlice } from '../../../store/reducers/ClientsSlice';
import { TPayloadKeyContact } from '../../../types/CrmTypes';
import { modalSlice } from '../../../store/reducers/ModalSlice';

import './table-crm.style.scss';

export const TableCrm = () => {
  const { clients } = useTypeSelector((state) => state.clientReducer);
  const { clietToAscending, clietToDescending } = clientSlice.actions;
  const { openModal } = modalSlice.actions;
  const dispatch = useTypeDispatch();

  const [activeButton, setActiveButton] = useState<TPayloadKeyContact | ''>('');
  const [isSortingDirection, setIsSortingDirection] = useState<boolean>(true);

  const handleClickSort = (nameSort: TPayloadKeyContact): void => {
    setActiveButton(nameSort);

    if (isSortingDirection === true && activeButton === nameSort) {
      setIsSortingDirection(false);
    } else {
      setIsSortingDirection(true);
    }
  };

  useEffect(() => {
    if (activeButton !== '') {
      if (isSortingDirection) {
        dispatch(clietToAscending(activeButton));
      } else {
        dispatch(clietToDescending(activeButton));
      }
    }
  }, [activeButton, isSortingDirection]);

  return (
    <>
      <ul className="table">
        <li className="table__id">
          <button
            className={activeButton === 'id' ? 'table__sort-btn sort-active' : 'table__sort-btn'}
            onClick={() => handleClickSort('id')}
          >
            <span>ID</span>
            {isSortingDirection && activeButton === 'id' ? arrowTopSvg : arrowBottomSvg}
          </button>
        </li>
        <li className="table__fio">
          <button
            className={activeButton === 'surname' ? 'table__sort-btn sort-active' : 'table__sort-btn'}
            onClick={() => handleClickSort('surname')}
          >
            <span>Фамилия Имя Отчество</span>
            {isSortingDirection && activeButton === 'surname' ? arrowTopSvg : arrowBottomSvg}
            {isSortingDirection && activeButton === 'surname' ? (
              <span className="table__fio-text">Я-А</span>
            ) : (
              <span className="table__fio-text">А-Я</span>
            )}
          </button>
        </li>
        <li className="table__time">
          <button
            className={activeButton === 'createdAt' ? 'table__sort-btn sort-active' : 'table__sort-btn'}
            onClick={() => handleClickSort('createdAt')}
          >
            <span> Дата и время создания</span>
            {isSortingDirection && activeButton === 'createdAt' ? arrowTopSvg : arrowBottomSvg}
          </button>
        </li>
        <li className="table__time">
          <button
            className={activeButton === 'updatedAt' ? 'table__sort-btn sort-active' : 'table__sort-btn'}
            onClick={() => handleClickSort('updatedAt')}
          >
            <span>Последние изменения</span>
            {isSortingDirection && activeButton === 'updatedAt' ? arrowTopSvg : arrowBottomSvg}
          </button>
        </li>
        <li className="table__contacts">
          <span className="table__head-text">Контакты</span>
        </li>
        <li className="table__actions">
          <span className="table__head-text">Действия</span>
        </li>
      </ul>
      <div className="table-container">
        {clients.length !== 0 &&
          clients.map((client) => (
            <ul className="table" key={client.id}>
              <li className="table__id" key={'0' + client.id}>
                {client.id}
              </li>
              <li
                className="table__fio"
                key={client.name + client.id}
              >{`${client.surname} ${client.name} ${client.lastName}`}</li>
              <TdCrmCreatedAndUpdatedTime created={client.createdAt} updated={client.updatedAt} />
              <TdCrmContacts key={client.contacts[0].value + client.id} contacts={client.contacts} />
              <li className="table__actions">
                <button
                  className="table__actions-change"
                  key={'изменить' + client.id}
                  onClick={() => dispatch(openModal({ client: client, isSubmiting: false }))}
                >
                  {changeSvg}
                  изменить
                </button>
                <button
                  className="table__actions-remove"
                  key={'удалить' + client.id}
                  onClick={() => dispatch(openModal({ client: client, isSubmiting: true }))}
                >
                  {removeClientSvg}
                  удалить
                </button>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};
