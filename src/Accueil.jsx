import Connexion from './Connexion';
import Notification from './Notification';
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import AdminPanel from './AdminPanel';

function Accueil() {
  return (
    <div>
      <div className="hero">
        <div>
          <p className="eyebrow">Tableau de bord</p>
          <h2>Bienvenue dans votre espace</h2>
          <p>Retrouvez vos outils essentiels au même endroit.</p>
        </div>
        <Logo />
      </div>

      <div className="grille">
        <Connexion />
        <Notification />
        <ListeTaches />
        <AdminPanel />
        <LecteurAudio />
      </div>
    </div>
  );
}

export default Accueil;
