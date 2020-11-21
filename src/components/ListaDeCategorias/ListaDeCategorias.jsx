import React from 'react';

import "./ListaDeCategorias.css"

function ListaDeCategorias({Categorias, adicionarCategoria}) {
    function _handleEventInput(e){
        if(e.key === "Enter"){
            let valorCategoria = e.target.value
            adicionarCategoria(valorCategoria)
            e.target.value = "";
        }
    }

    function RenderCategorias(Categorias){
        let id = 1;
        let components = [];
        
        Categorias.forEach(element => {
            components.push(
              <li className="lista-categorias_item" key={id++} index={id - 1}>
                {element}
              </li>
            );
        });

        return components;
    }

  return <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {RenderCategorias(Categorias)}
      </ul>

      <input type="text" className="lista-categorias_input" placeholder="Adicionar" onKeyUp={_handleEventInput}></input>
  </section>;
}

export default ListaDeCategorias;