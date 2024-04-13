import '../../assets/css/App.css';
import { NavLink } from "react-router-dom";
import photoErreur from "../../assets/page-erreur.gif"

function Error() {
    return (
        <>
            <div className="error">
            <img className="gif-erreur" src={photoErreur} alt="erreur" />
                <p className="error-number">404</p>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                <p className="error-link"><NavLink to="/">Retourner sur la page d'accueil</NavLink></p>
            </div>
        </>
        );
    }

export default Error;