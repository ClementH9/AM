import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import EVJF from './pages/evjf/evjf';
import EVG from './pages/evg/evg';
import Product from './pages/page-produit/page-produit'; // Importez la page du produit
import Panier from './pages/panier/panier';
import Confirmation from './pages/confirmation/confirmation';
import Error from './pages/erreur/erreur';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './assets/css/App.css';

// Créez un tableau de produits factice pour tester votre composant Panier
const produitsDansPanier = [
  { id: 1, nom: "Produit 1", prix: 10, image: "chemin/image1.jpg" },
  { id: 2, nom: "Produit 2", prix: 20, image: "chemin/image2.jpg" },
  // Ajoutez autant d'objets que nécessaire
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evjf" element={<EVJF />} />
          <Route path="/evg" element={<EVG />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/panier" element={<Panier panier={produitsDansPanier} />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
