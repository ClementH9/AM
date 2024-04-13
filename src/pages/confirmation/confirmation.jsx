import React from 'react';
import validationCommande from "../../assets/Gbxx90A.gif"

function ConfirmationCommande() {
    // Générer un numéro de commande aléatoire
    const numeroCommande = Math.floor(Math.random() * 1000000);
  
    return (
      <div className="confirmation-container">
        <h2>Confirmation de commande</h2>
        <div className="center-image">
          <img className="gif-confirmation" src={validationCommande} alt="confirmation" />
        </div>
        <p>Merci pour votre commande !</p>
        <p>Le bonheur n'est plus très loin !</p>
        <p>Numéro de commande : <strong>{numeroCommande}</strong></p>
        <p>Enjoy :)</p>
      </div>
    );
  }
  
  export default ConfirmationCommande;
  