import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { modalSlice } from '../../../store/reducers/ModalSlice';
import { closeModalSvg } from '../ModalCrm/ModalCrmSvg';
import { clientSlice } from '../../../store/reducers/ClientsSlice';

import './modal-submit.style.scss';

export const ModalCrmSubmit = () => {
  const { client, isOpenModalSubmit } = useTypeSelector((state) => state.modalReducer);
  const { removeClient } = clientSlice.actions;
  const { closeSubmitModal } = modalSlice.actions;
  const dispatch = useTypeDispatch();

  const handleClickRemoveClient = () => {
    if (client !== null) {
      dispatch(removeClient(client.id));
      dispatch(closeSubmitModal());
    }
  };

  function handleClickCloseModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (e.target === e.currentTarget) {
      dispatch(closeSubmitModal());
    }
  }

  return (
    <div className={isOpenModalSubmit ? 'modal-container opened' : 'modal-container'} onClick={handleClickCloseModal}>
      <div className="modal">
        <button className="modal__button-close-top" onClick={() => dispatch(closeSubmitModal())}>
          {closeModalSvg}
        </button>
        <h3>Удалить клиента</h3>
        <p className="modal__submit-text">Вы действительно хотите удалить данного клиента?</p>
        <button className="modal__submit" onClick={() => handleClickRemoveClient()}>
          Удалить
        </button>
        <button className="modal__button-close-bottom" onClick={() => dispatch(closeSubmitModal())}>
          Отмена
        </button>
      </div>
    </div>
  );
};
