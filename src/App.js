import React, { useState } from "react";

import "./App.css";
// import classNames from "classnames";

import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

function App() {
  document.title = "ToDoList";

  const [Notes, setNotes] = useState([]);

  function criarNota(titulo, nota) {
    var NovaNota = { titulo: titulo, nota: nota };
    var NovoArrayNotas = [...Notes, NovaNota];
    setNotes(NovoArrayNotas);
  }

  return (
    <section className="conteudo">
      <FormularioCadastro criarNota={criarNota}></FormularioCadastro>
      <ListaDeNotas notes_array={Notes}></ListaDeNotas>
    </section>
  );
}

export default App;
