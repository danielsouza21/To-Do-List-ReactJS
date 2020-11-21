import React, { useState } from "react";

import "./App.css";
// import classNames from "classnames";

import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";

function App() {
  document.title = "ToDoList";

  const [Notes, setNotes] = useState([]);
  const [Categorias, setCategorias] = useState(["Trabalho", "Esportes"]);

  function criarNota(titulo, nota) {
    var NovaNota = { titulo: titulo, nota: nota };
    var NovoArrayNotas = [...Notes, NovaNota];
    setNotes(NovoArrayNotas);
  }

  function deletarNota(index) {
    var NewNotas = Notes.slice(); //copiar elementos sem referencia
    NewNotas.splice(index, 1); //remove elemento
    setNotes(NewNotas);
  }

  function adicionarCategoria(_Categoria) {
    var NovaCategoria = _Categoria;
    var NovoArrayCategoria = [...Categorias, NovaCategoria];
    setCategorias(NovoArrayCategoria);
  }

  return (
    <section className="wrapper">
      <FormularioCadastro criarNota={criarNota}></FormularioCadastro>
      <div className="conteudo">
        <ListaDeCategorias
          Categorias={Categorias}
          adicionarCategoria={adicionarCategoria}
        ></ListaDeCategorias>
        <ListaDeNotas
          notes_array={Notes}
          deletarNota={deletarNota}
        ></ListaDeNotas>
      </div>
    </section>
  );
}

export default App;
