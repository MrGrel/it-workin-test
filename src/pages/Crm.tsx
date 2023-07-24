import { Container } from '../components/Container.style';
import { Main, Title } from '../components/Crm/Crm.style';
import { ModalCrm } from '../components/Crm/ModalCrm/ModalCrm';
import { ModalCrmSubmit } from '../components/Crm/ModalSubmiting.tsx/ModalSubmiting';
import { TableCrm } from '../components/Crm/TableCrm/TableCrm';
import { useTypeSelector } from '../hooks/redux';

export const Crm = () => {
  const { isOpenModal, isOpenModalSubmit } = useTypeSelector((state) => state.modalReducer);
  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">User Management</h1>
        <TableCrm />
      </div>
      {isOpenModal && <ModalCrm />}
      {isOpenModalSubmit && <ModalCrmSubmit />}
    </main>
  );
};
