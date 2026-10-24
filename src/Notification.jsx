import { useState } from 'react';

function Notification() {
  const [compteur, setCompteur] = useState(3);

  return (
    <div className="carte">
      <p className="eyebrow">Activité</p>
      <h3>Notifications</h3>
      <div className="bloc-compteur">
        {compteur > 0 && (
          <>
            <span className="compteur">{compteur}</span>
            <span className="compteur-texte">non lues</span>
          </>
        )}
      </div>
      <button className="btn btn-doux" onClick={() => setCompteur(compteur + 1)}>
        Ajouter une notification
      </button>
    </div>
  );
}

export default Notification;
