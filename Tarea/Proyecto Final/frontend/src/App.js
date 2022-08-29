import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import PresupuestoPage from './pages/PresupuestoPage';
import ProductosPage from './pages/ProductosPage';
import ServiciosPage from './pages/ServiciosPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='Presupuestos' element={<PresupuestoPage />} />
          <Route path='Productos' element={<ProductosPage />} />
          <Route path='Servicios' element={<ServiciosPage />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>

    </div>
  );
}

export default App;
