import { handleNovoItem } from "./components/CriarTarefa.js"
import { carregaTarefa } from "./components/carregaTarefa.js"

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener("click", handleNovoItem)

carregaTarefa()
