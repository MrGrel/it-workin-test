import { useTypeDispatch } from '../../hooks/redux';
import { modalSlice } from '../../store/reducers/ModalSlice';

export const NavBar = () => {
  const { openModal } = modalSlice.actions;
  const dispatch = useTypeDispatch();
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <span className="nav__logo-text">IT Workin</span>
          </div>
          <button className="nav__btn" onClick={() => dispatch(openModal({ client: null, isSubmiting: false }))}>
            Добавить клиента
          </button>
        </nav>
      </div>
    </header>
  );
};
