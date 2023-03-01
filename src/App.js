import './App.css';
import { ToDo } from './ToDo';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './core/store';

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <ToDo />
      </ReduxProvider>
    </div>
  );
}

export default App;
