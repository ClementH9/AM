import React from 'react';
import data from '../../../activities.json'; // Importer les données depuis le fichier JSON

function Products({ category }) {
  const filteredProducts = data.filter(product => product.category === category);

  return (
    <div className="products">
      {filteredProducts.map(product => (
        <div key={product.id} className="card">
          {/* Construire le chemin d'accès complet à partir du nom de fichier spécifié dans le JSON */}
          <img src={require(`../../../assets/${product.image}`).default} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Prix: {product.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default Products;