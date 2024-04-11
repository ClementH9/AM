import React from 'react';
import '../../assets/css/App.css';
import data from '../../activities.json'; // Importer les données depuis le fichier JSON

function EVG() {
  const evgActivities = data.filter(activity => activity.category === "EVG");

  return (
    <div>
      <h1>Organisation d'EVG</h1>
      {evgActivities.map(activity => (
        <div key={activity.id}>
          <h2>{activity.title}</h2>
          <p>{activity.description}</p>
          <p>Prix: {activity.price} €</p>
          <img src={activity.image} alt={activity.title} />
        </div>
      ))}
    </div>
  );
}

export default EVG;