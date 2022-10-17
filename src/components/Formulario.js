import "../styles/Formulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Formulario = (props) => {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        className="input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="boton">Agregar Tarea</button>
    </form>
  );
};
