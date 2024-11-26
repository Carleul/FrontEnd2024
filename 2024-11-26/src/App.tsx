import "./styles.css";
import { useState } from "react";
import { Button } from "./components/Button/Button";

const tarefaInicial = ["Comprar leite"];

function App() {
  const [tarefas, setTarefa] = useState(tarefaInicial);
  const [novaTarefa, setNovaTarefa] = useState("");
  const tarefaList = tarefas.map((tarefa, index) => (
    <li key={index} className="elemento">
      {tarefa}
      <button className="remover" onClick={() => removeTarefa(index)}>
        X
      </button>
    </li>
  ));

  function addTarefa() {
    const tarefaAtualizada = tarefas.concat(novaTarefa);
    setTarefa(tarefaAtualizada);
    setNovaTarefa("");
  }

  function removeTarefa(indexDeletar: any) {
    const novasTarefas = tarefas.filter(
      (tarefa, index) => index !== indexDeletar
    );
    setTarefa(novasTarefas);
  }

  return (
    <body>
      <div className="conteudo">
        <input
          className="caixa"
          type="text"
          onChange={(event) => setNovaTarefa(event.target.value)}
          value={novaTarefa}
        />
        <Button quandoClica={addTarefa}>Adicionar tarefa</Button>
        <ul>{tarefaList}</ul>
      </div>
    </body>
  );
}

export default App;