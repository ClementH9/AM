import React from 'react';

// Composant fonctionnel représentant une carte d'activité
const Card = ({ activity }) => {
  const handleCardClick = () => {
    // Rediriger uniquement si le lien est disponible
    if (activity.link) {
      window.location.href = activity.link;
    }
  };

  return (
    // Div qui représente la carte d'activité
    <div className="card" onClick={handleCardClick}>
      {/* Titre de l'activité */}
      <h2>{activity.title}</h2>
      {/* Image de l'activité */}
      <img src={activity.image} alt={activity.title} />
    </div>
  );
};

export default Card;
