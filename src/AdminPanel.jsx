import { useState } from 'react';

function AdminPanel() {
  const [role, setRole] = useState('utilisateur');

  return (
    <div className="carte">
      <p className="eyebrow">Permissions</p>
      <h3>Panneau d'administration</h3>
      <p className="role">Rôle actuel : <strong>{role}</strong></p>
      <button
        className="btn btn-doux"
        onClick={() => setRole(role === 'admin' ? 'utilisateur' : 'admin')}
      >
        Changer de rôle
      </button>

      {role === 'admin' && (
        <p style={{ marginTop: '14px', marginBottom: 0 }}>
          Zone réservée aux administrateurs.
        </p>
      )}
    </div>
  );
}

export default AdminPanel;
