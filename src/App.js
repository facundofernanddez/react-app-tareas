import "./App.css";
import { Lista, Banner } from "./components";

//Falta hacer que los elementos se sigan manteniendo en la pag si el usuario vuelve a entrar a la pag o la recarga y el banner

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <div className="tareas-principal">
          <h1>Mis tareas</h1>
          <Lista />
        </div>
      </div>
    </div>
  );
}

export default App;
