import React, { useState } from "react";

import "./FormularioCadastro.css"

// import { Container } from './styles';

function FormularioCadastro({criarNota}) {
    function handleTitleChange(e){
        setTitle_note(e.target.value);
    }

    function handleTextChange(e){
        setText_note(e.target.value);
    }

    function SubmitClick(e){
        e.preventDefault();
        e.stopPropagation();
        criarNota(Title_note, Text_note);
    }

    const [Title_note, setTitle_note] = useState("");
    const [Text_note, setText_note] = useState("");

  return (
      <form className="formulario">
        <input type="text" placeholder="Titulo" onChange={handleTitleChange}></input>
        <textarea placeholder="Escreva sua nota" onChange={handleTextChange}></textarea>
        <button onClick={SubmitClick}>Criar nota</button>
      </form>
  );
}

export default FormularioCadastro;
