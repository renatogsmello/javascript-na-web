import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criarData } from "./criarData.js";

export const carregaTarefa = () => {
  const lista = document.querySelector("[data-list]");

  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

  lista.innerHTML = " ";

  const datasUnicas = removeDatasRepetidas(tarefasCadastradas);

  ordenaDatas(datasUnicas);

  datasUnicas.forEach((dia) => {
    lista.appendChild(criarData(dia));
  });
};
