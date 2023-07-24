import { NavBar } from './components/NavBar/NavBar';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import { Crm } from './pages/Crm';
import './app.scss';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Crm />
    </Provider>
  );
}

export default App;
