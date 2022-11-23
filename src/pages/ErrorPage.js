import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <section>
      <h1>Página não encontrada</h1>
      <button onClick={()=> goToHomePage(navigate)}>
        Retornar a pagina inicial.
      </button>
    </section>
  );
}

export default ErrorPage;
