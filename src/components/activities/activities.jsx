import React, { useState, useEffect } from 'react';
import Card from '../card/card';

// Composant principal de l'application
const App = () => {
  // État pour stocker les activités récupérées du fichier JSON
  const [activities, setActivities] = useState([]);

  // Effet de côté pour charger les activités lors du chargement initial de l'application
  useEffect(() => {
    // Charger les activités depuis le fichier JSON
    fetch('activities.json')
      .then(response => response.json())
      .then(data => setActivities(data.activities))
      .catch(error => console.error('Erreur lors du chargement des activités :', error));
  }, []); // Le tableau vide en tant que dépendance assure que cet effet ne se déclenchera qu'une seule fois

  return (
    // Div qui représente le conteneur principal de l'application
    <div className="container">
      {/* Mapper sur chaque activité et afficher une carte pour chacune */}
      {activities.map(activity => (
        <Card key={activity.name} activity={activity} />
      ))}
    </div>
  );
}

export default App;