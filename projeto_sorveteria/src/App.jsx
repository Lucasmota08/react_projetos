import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
