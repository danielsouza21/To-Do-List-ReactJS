import { useState } from "react";

export default function DadosNotas() {
  const [Notes, setNotes] = useState([]);
  //   const Notes = [];
  //   const _inscritos = [];

  this.criarNota = function (titulo, nota, categoria) {
    if (titulo === "") {
      titulo = "Nota";
    }

    var NovaNota = new Nota(titulo, nota, categoria);
    var NovoArrayNotas = [...Notes, NovaNota];
    setNotes(NovoArrayNotas);
    // Notes.push(NovaNota);
  };

  this.deletarNota = function (index) {
    var NewNotas = Notes.slice(); //copiar elementos sem referencia
    NewNotas.splice(index, 1); //remove elemento
    setNotes(NewNotas);
    // Notes.splice(index, 1);
  };

  //   this.subscribe = function (func) {
  //     _inscritos.push(func);
  //   };

  //   this.notify = function () {
  //     _inscritos.forEach((func) => func(Notes));
  //   };

  return [Notes, this.deletarNota, this.criarNota];
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
