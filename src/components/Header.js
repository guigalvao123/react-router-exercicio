import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToProfilePage } from "../routes/coordinator";


function Header() {

    const navigate = useNavigate()

    const pathParams = useParams()

    console.log(pathParams)

    return (
        <header>
            <button onClick={() => goToHomePage(navigate)}>
                Pagina Inicial
            </button>
            <button onClick={() => goToProfilePage(navigate, "guilherme")}>
                Pagina Perfil
            </button>
        </header>
    );
}

export default Header;