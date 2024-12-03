import { Provider } from 'react-redux';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { store } from './store';
import { Todo } from './components/Todo/Todo';

function App() {
  return (  
    <>
      <Provider store={store}>
        <Counter/>
        <Todo/>
      </Provider>
    </>
  );
}

export default App;
