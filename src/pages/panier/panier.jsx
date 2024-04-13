import React, { useEffect, useState } from 'react';
import data from '../../activities.json'; // Importer les données du fichier JSON
import { Link } from 'react-router-dom';
import Categories from '../../components/categories/categories';

function Panier() {
  const [cart, setCart] = useState([]);

  // Chargement du panier depuis le local storage lors du montage du composant
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Supprimer un produit du panier
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Ajuster la quantité d'un produit dans le panier
  const adjustQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id); // Supprimer le produit si la quantité est réduite à 0
      return;
    }
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Consolidation du panier en regroupant les produits avec une quantité > 1
  const consolidatedCart = cart.reduce((consolidated, currentItem) => {
    const existingItem = consolidated.find(item => item.id === currentItem.id);
    if (existingItem) {
      existingItem.quantity += currentItem.quantity;
    } else {
      const product = data.find(item => item.id === currentItem.id); // Rechercher le produit dans les données
      if (product) {
        consolidated.push({ ...currentItem, image: product.image, title: product.title, price: product.price }); // Ajouter le produit avec le chemin d'accès à l'image
      }
    }
    return consolidated;
  }, []);

  // Calcul du total du panier
  const totalPanier = consolidatedCart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
        <div>
            <div className="categories">
                <Categories />
            </div>
        </div>
        <div className="panier-container">
        <h2 className="panier-title">Votre Panier</h2>
        {consolidatedCart.length === 0 ? (
            <p className="empty-cart-message">Votre panier est vide.</p>
        ) : (
            <div>
            <ul className="cart-items-list">
                {consolidatedCart.map((item, index) => (
                <li key={index} className="cart-item">
                    <div className="item-details">
                    <a href={`/product/${item.id}`} className="card-link"><img src={item.image} alt={item.title} className="item-image" /></a>
                    <div className="item-description">
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-quantity">
                        Quantité: 
                        <select
                            value={item.quantity}
                            onChange={(e) => adjustQuantity(item.id, parseInt(e.target.value))}
                        >
                            {[...Array(10).keys()].map(num => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                            ))}
                        </select>
                        </p>
                        <p className="item-price">Prix total: {item.price * item.quantity} €</p>
                    </div>
                    <div className="button-commande">
                        <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
                    </div>
                    </div>
                    {index !== consolidatedCart.length - 1 && <hr className="separator" />} {/* Ajouter un trait de séparation si ce n'est pas le dernier élément */}
                </li>
                ))}
                </ul>
                <p className="total-price">Total du panier: {totalPanier} €</p>
                <div className="button">
                    <Link to="/confirmation">
                        <button>Commander</button>
                    </Link>
                </div>
            </div>
        )}
        </div>
    </div>
  );
}

export default Panier;
