import React from "react";

import "./App.css";
// import classNames from "classnames";

import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";

import DadosCategoria from "./database/Categorias";
import DadosNotas from "./database/Notes";

function App() {
  document.title = "ToDoList";

  const [Categorias, adicionarCategoria] = new DadosCategoria();
  const [Notes, deletarNota, criarNota] = new DadosNotas();

  return (
    <section className="wrapper">
      <FormularioCadastro
        Categorias={Categorias}
        criarNota={criarNota}
      ></FormularioCadastro>
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
