import React from "react";
import classNames from "classnames";

import {ReactComponent as Deletesvg} from "../../assets/imgs/delete.svg"

import "./Nota.css"

// import { Container } from './styles';

function Nota({titulo, nota, categoria, deletarNota, index}) {
  return (
    <section>
      <div className={classNames("nota__wrapper")}>
        <header className="nota__cabecalho">
            <h3>{titulo}</h3>
          <Deletesvg onClick={() => deletarNota(index)} className="pointer" />
            <h4>{categoria}</h4>
        </header>
        <p>{nota}</p>
      </div>
    </section>
  );
}

export default Nota;
