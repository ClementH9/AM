import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import data from '../../../activities.json';

// Composant principal de l'application
const App = () => {
  // État pour stocker les activités récupérées du fichier JSON
  const [activities, setActivities] = useState([]);

  // Effet de côté pour charger les activités lors du chargement initial de l'application
  useEffect(() => {
    // Assigner directement les données JSON à l'état activities
    setActivities(data);
  }, []);

  return (
    // Div qui représente le conteneur principal de l'application
    <div className="container">
      {/* Mapper sur chaque activité et afficher une carte pour chacune */}
      {activities.map(activity => (
        <Card key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default App;
