import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "./components/Input"
import Button from "./components/Button"

function App() {
  //navigate vai permitir mudar para a proxima pagina
  const navigate = useNavigate()

  //variaveis que serão passadas para a outra pagina
  const [question, setQuestion] = useState("")
  const [opcao1, setOpcao1] = useState("")
  const [opcao2, setOpcao2] = useState("")

  //verifica se os campos foram preenchidos
  function criarDados() {
    if(!question.trim() || !opcao1.trim() || !opcao2.trim()) {
      return alert("Preencha todos os campos!")
    }

    //chama a função que vai armazenar os dados
    onAddDadosSubmit(question, opcao1, opcao2)
  }

  //armazena os dados
  function onAddDadosSubmit(descricao: string, op1: string, op2: string) {
    const dados = {
      descricao,
      op1,
      op2
    }

    //chama a função que vai começar a votação
    startVotation(dados)
  }

  //inicia a votação, alterando a pagina
  function startVotation(dados: {descricao: string, op1: string, op2: string}) {
    const query = new URLSearchParams()
    query.set("descricao", dados.descricao)
        query.set("opcao1", dados.op1)
        query.set("opcao2", dados.op2)
        navigate(`/principal?${query.toString()}`)
  }

  return (
    <div className="bg-slate-500 flex flex-col items-center h-screen w-screen p-1 gap-5">
      <div className="font-bold text-3xl">
        VOTAÇÃO BINÁRIA
      </div>

      <div className="border-2 rounded-2xl h-1/2 w-1/2 bg-slate-400 p-2 flex flex-col items-center text-lg gap-10">
        <div className="flex flex-col w-full gap-1">
          <span>Informe o tema a ser votado:</span>
          <Input op={question} setOpcao={setQuestion} name={"descricao"}/>
        </div>
        <div className="flex justify-between w-5/6">
            <div className="border-2 w-1/3 rounded-md flex flex-col items-center p-2 gap-2">
              opção 1
              <Input op={opcao1} setOpcao={setOpcao1} name={"opcao1"}/>
            </div>
            <div className="border-2 w-1/3 rounded-md flex flex-col items-center p-2 gap-2">
              opção 2
              <Input op={opcao2} setOpcao={setOpcao2} name={"opcao2"}/>
            </div>
        </div>
        <Button descricao="Começar votação" createDados={criarDados} disabled={false}/>
      </div>
      <div className="mt-auto">
        <div className="flex flex-col items-center">
                <span className="text-white font-bold">Sistema desenvolvido exclusivamente para o seminário de EDG1 - turma B</span>
                <span className="text-white font-bold">Autores: Yudi, Renato, Otavio, Mateus, José Vitor</span>
            </div>
      </div>
    </div>
  )
}

export default App
