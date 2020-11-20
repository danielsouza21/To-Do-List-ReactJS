import React, { useState } from "react";

import "./App.css";
// import classNames from "classnames";

import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

function App() {
  document.title = "ToDoList";

  const [Notes, setNotes] = useState([]);

  function criarNota(titulo, nota) {
    let aux = Notes;
    aux.push({ titulo: titulo, nota: nota });

    setNotes(aux);
  }

  return (
    <div className="App">
      <FormularioCadastro criarNota={criarNota}></FormularioCadastro>
      <ListaDeNotas notes_array={Notes}></ListaDeNotas>
    </div>
  );
}

export default App;
