import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom"
import { goToHomePage } from "../routes/coordinator";

function ProfilePage() {

  const navigate = useNavigate()
  const pathParams = useParams()
  console.log(pathParams)

  return (
    <section>
      <Header />
      <h1>Página de perfil do {pathParams.name}</h1>
      <button onClick={() => goToHomePage(navigate, "guilherme")}>
        Ir para a pagina inicial.
      </button>
    </section>
  );
}

export default ProfilePage;
