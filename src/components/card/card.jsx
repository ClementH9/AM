import React from 'react';

// Composant fonctionnel représentant une carte d'activité
const ActivityCard = ({ activity }) => {
  return (
    // Div qui représente la carte d'activité
    <div className="card" onClick={() => window.location.href = activity.link}>
      {/* Titre de l'activité */}
      <h2>{activity.name}</h2>
      {/* Image de l'activité */}
      <img src={activity.image} alt={activity.name} />
    </div>
  );
}

export default ActivityCard;