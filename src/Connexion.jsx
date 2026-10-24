import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div className="carte">
      <p className="eyebrow">Compte</p>
      {connecte ? (
        <div>
          <h3>Bienvenue</h3>
          <p>Vous êtes connecté à votre espace.</p>
          <button className="btn btn-primaire" onClick={() => setConnecte(false)}>
            Se déconnecter
          </button>
        </div>
      ) : (
        <div>
          <h3>Connexion</h3>
          <p>Connectez-vous pour accéder à votre espace.</p>
          <button className="btn btn-primaire" onClick={() => setConnecte(true)}>
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
}

export default Connexion;
