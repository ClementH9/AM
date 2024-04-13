import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../assets/css/App.css';
import data from '../../activities.json';
import Categories from '../../components/categories/categories'

function Product() {
  const { id } = useParams();
  const product = data.find(item => item.id.toString() === id);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produit ajouté au panier !');
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
        <div className="categories">
            <Categories />
         </div>
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image" src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Prix: {product.price} €</p>
                <div className="quantity-selector">
                <label htmlFor="quantity">Quantité:</label>
                <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                    {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                </select>
                </div>
                <div className="button">
                <Link to="/panier">
                    <button onClick={handleAddToCart}>Ajouter au panier</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Product;
