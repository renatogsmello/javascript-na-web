const BotaoDeleta = (atualiza, id) => {
	const botaoDeleta = document.createElement("button")
	botaoDeleta.innerText = "deletar"

	botaoDeleta.addEventListener("click", () => deletaTarefa(atualiza, id))

	return botaoDeleta
}

const deletaTarefa = (atualiza, id) => {
	const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"))

	tarefasCadastradas.splice(id, 1)
	localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas))

	atualiza()
}

export default BotaoDeleta
