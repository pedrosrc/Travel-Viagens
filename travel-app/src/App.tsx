import { BrowserRouter } from 'react-router-dom'
import Nav from "./services/Nav";
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Nav />
      </BrowserRouter>
    </Provider>

  )
}

export default App;
