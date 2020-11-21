import React, { useState } from "react";

import "./FormularioCadastro.css"

// import { Container } from './styles';

function FormularioCadastro({criarNota, Categorias}) {
    function handleTitleChange(e){
        setTitle_note(e.target.value);
    }

    function handleTextChange(e){
        setText_note(e.target.value);
    }

    function handleCategoriaChange(e){
        e.stopPropagation();
        setCategoria_note(e.target.value);
    }

    function SubmitClick(e){
        e.preventDefault();
        e.stopPropagation();
        criarNota(Title_note, Text_note, Categoria_note);
        
        setTitle_note("");
        setText_note("");
    }

    function RenderCategorias(Categorias){
        let id = 1;
        let components = [];
        
        Categorias.forEach(element => {
            components.push(
              <option className="formulario-categoria_item" key={id++} index={id - 1}>
                {element}
              </option>
            );
        });

        return components;
    }

    const [Title_note, setTitle_note] = useState("");
    const [Text_note, setText_note] = useState("");
    const [Categoria_note, setCategoria_note] = useState(Categorias[0]);

  return (
      <form className="formulario">
        <select value={Categoria_note} onChange={handleCategoriaChange}>{RenderCategorias(Categorias)}</select>
        <input value={Title_note} type="text" placeholder="Titulo" onChange={handleTitleChange}></input>
        <textarea value={Text_note} placeholder="Escreva sua nota" onChange={handleTextChange}></textarea>
        <button onClick={SubmitClick}>Criar nota</button>
      </form>
  );
}

export default FormularioCadastro;
