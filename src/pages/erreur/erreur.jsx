import '../../assets/css/App.css';
import { NavLink } from "react-router-dom";
import photoErreur from "../../assets/error.jpeg"

function Error() {
    return (
        <>
            <div className="error">
            <img className="gif-erreur" src={photoErreur} alt="erreur" />
                <p className="error-number">Erreur - 404</p>
                <p className="error-text">La page que vous demandez n'existe pas.</p>
                <p className="error-link"><NavLink to="/">Retour à l'accueil</NavLink></p>
            </div>
        </>
        );
    }

export default Error;