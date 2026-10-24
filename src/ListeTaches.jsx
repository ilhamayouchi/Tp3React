import { useState } from 'react';

function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 1, titre: "Apprendre React" },
    { id: 2, titre: "Créer une application" },
    { id: 3, titre: "Tester le code" }
  ]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = (e) => {
    e.preventDefault();
    if (nouvelleTache.trim() === '') return;
    setTaches([...taches, { id: Date.now(), titre: nouvelleTache }]);
    setNouvelleTache('');
  };

  return (
    <div className="carte">
      <div className="carte-tete">
        <div>
          <p className="eyebrow">Organisation</p>
          <h3>Liste des tâches</h3>
        </div>
        <span className="badge">{taches.length}</span>
      </div>
      <ul className="taches">
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
      <form className="form-tache" onSubmit={ajouterTache}>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button className="btn btn-primaire" type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ListeTaches;
