import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listado from "./components/Listado"
import Busqueda from "./components/Busqueda";

function App() {
  return (
    <>
      <Busqueda />
      <Listado />
    </>
  );
}

export default App;
