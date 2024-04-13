import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import '../../assets/css/App.css';
import data from '../../activities.json'; // Importer les données depuis le fichier JSON
import Categories from '../../components/categories/categories'

function EVG() {
  const evgActivities = data.filter(activity => activity.category === "EVG");

  return (
    <div>
        <div className="cat">
            <Categories/>
        </div>
        <div className="activity-container">
        <h1 className="organisation">Organisation d'EVG</h1>
            <div className="activity-grid">
                {evgActivities.map(activity => (
                    <div className="activity-card">
                        <Link key={activity.id} to={`/product/${activity.id}`} className="activity-link">
                            <img className="activity-image" src={activity.image} alt={activity.title} />
                        </Link>
                        <h2 className="activity-title">{activity.title}</h2>
                        <p className="activity-price">Prix: {activity.price} €</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default EVG;
