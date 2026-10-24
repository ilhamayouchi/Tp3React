import { Routes, Route, Link } from 'react-router-dom';
import Entete from './Entete';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="entete">
        <Entete />
        <nav className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
