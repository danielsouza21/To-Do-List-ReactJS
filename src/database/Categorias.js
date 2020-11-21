import { useState } from "react";

export default function DadosCategorias() {
  const [Categorias, setCategorias] = useState([
    "Sem categoria",
    "Faculdade",
    "Trabalho",
  ]);

  //   const Categorias = ["Sem categoria", "Faculdade", "Trabalho"];
  //   const _inscritos = [];

  this.adicionarCategoria = function (new_categoria) {
    var NovaCategoria = new_categoria;
    var NovoArrayCategoria = [...Categorias, NovaCategoria];
    setCategorias(NovoArrayCategoria);
    // Categorias.push(new_categoria);
  };

  //   this.subscribe = function (func) {
  //     _inscritos.push(func);
  //   };

  //   this.notify = function () {
  //     _inscritos.forEach((func) => func(Categorias));
  //   };

  return [Categorias, this.adicionarCategoria];
}
