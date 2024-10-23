
import { BrowserRouter as Router, 
  Route, Routes } from 'react-router-dom';
import Login from './assets/Componentes/Login/Login';
import Bitacora from './assets/Componentes/IngresoBitacora/Bitacora';
import Menu from './assets/Componentes/Menu/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
