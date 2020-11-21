import React from 'react';
// import classNames from "classnames";
import Nota from "../Notas"

import "./ListaDeNotas.css"

// import { Container } from './styles';

function ListaDeNotas({notes_array}) {  

    function RenderNotas(notes){
        let id = 1;
        let components = [];
        
        notes.forEach(element => {
            components.push(<li key={id++}><Nota tipo="Tipo1" nota={element.nota} titulo={element.titulo}></Nota></li>);
        });

        return components;
    }

  return(
      <ul id="plot-notas">
        {RenderNotas(notes_array)}
      </ul>
  )}

export default ListaDeNotas;