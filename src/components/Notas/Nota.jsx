import React from "react";
import classNames from "classnames";

import "./Nota.css"

// import { Container } from './styles';

function Nota({tipo, nota, titulo}) {
  return (
    <section>
      <div className={classNames("nota__wrapper", tipo)}>
        <header>
          <h3>{titulo}</h3>
        </header>
        <p>{nota}</p>
      </div>
    </section>
  );
}

export default Nota;
