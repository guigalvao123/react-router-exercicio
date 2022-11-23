import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../routes/coordinator";

function HomePage() {

  const navigate = useNavigate()

  return (

    <section>
      <Header />
      <h1>Página inicial</h1>
      <button onClick={() => goToProfilePage(navigate, "guilherme")}>
        Ir para pagina de Perfil.
      </button>
    </section>
  );
}

export default HomePage;
