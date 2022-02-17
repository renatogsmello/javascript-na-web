import { Tarefa } from "./CriarTarefa.js"

export const criarData = (data) => {
	const carregaTarefas = JSON.parse(localStorage.getItem("tarefas")) || []

	const dataTopo = document.createElement("li")

	const dataMoment = moment(data, "DD/MM/YYYY")
	const conteudo = `<p class="content-data">${dataMoment.format(
		"DD/MM/YYYY"
	)}</p>`

	dataTopo.innerHTML = conteudo

	carregaTarefas.forEach((tarefa, id) => {
		const dia = moment(tarefa.dataFormatada, "DD/MM/YYYY")

		const diff = dataMoment.diff(dia)

		if (diff === 0) {
			dataTopo.appendChild(Tarefa(tarefa, id))
		}
	})

	return dataTopo
}
