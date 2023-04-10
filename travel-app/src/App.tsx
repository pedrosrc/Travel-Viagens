import { BrowserRouter } from 'react-router-dom'
import Nav from "./services/Nav";
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Nav />
    </BrowserRouter>
  )
}

export default App;
