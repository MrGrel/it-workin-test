import { NavBar } from './components/NavBar/NavBar';
import { setupStore, persistor } from './store/store';
import { Provider } from 'react-redux';
import { Crm } from './pages/Crm';
import './app.scss';
import { PersistGate } from 'redux-persist/integration/react';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <Crm />
      </PersistGate>
    </Provider>
  );
}

export default App;
