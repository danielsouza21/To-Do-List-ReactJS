import React from 'react';
import Nota from "../Notas"

import "./ListaDeNotas.css"

// import { Container } from './styles';

function ListaDeNotas({notes_array, deletarNota}) {  

    function RenderNotas(notes){
        let id = 1;
        let components = [];
        
        notes.forEach(element => {
            components.push(
              <li key={id++}>
                <Nota
                  index={id - 1}
                  deletarNota={deletarNota}
                  nota={element.nota}
                  titulo={element.titulo}
                  categoria={element.categoria}
                ></Nota>
              </li>
            );
        });

        return components;
    }

  return(
      <ul id="plot-notas">
        {RenderNotas(notes_array)}
      </ul>
  )}

export default ListaDeNotas;