import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/Button"
import { useState, useRef } from "react"
import ParteDireita from "../components/ParteDireita"

function Principal() {
    //navigate permite voltar para a tela anterior
    const navigate = useNavigate()

    //searchParams permite pegar os valores passados para a URL
    const [searchParams] = useSearchParams()

    //os states são variaveis que atualizam os valores no HTML
    const [desabilitado, setDesabilitado] = useState(false)
    const [votValor, setVotValor] = useState(0)
    const [diferente, setDiferente] = useState(0)
    const [botaoPressionado, setBotaoPressionado] = useState(0)
    const [votacaoAndamento, setVotacaoAndamento] = useState(1)

    //os valores recebdos do searchParams vão ser armazenados aqui
    const descricao = searchParams.get("descricao")
    const opcao1 = searchParams.get("opcao1")
    const opcao2 = searchParams.get("opcao2")

    //variaveis de controle da quantidade de votos e cada tipo de voto
    let votosOp1 = useRef(0) //useRef() permite que a variavel mantenha seu valor mesmo quando o state atualiza
    let votosOp2 = useRef(0)
    let index = useRef(0)

    //função para votar
    function votar(op: number) {
        //index representa a quantidade total de votos
        index.current++

        //verifica em qual opção foi votada
        switch(op){
            case 1:
                //a quantidade aumenta
                votosOp1.current++
                //uma nova linha na tabela é gerada
                adicionarLinha({op1: 1, op2: 0, indice: index.current})
                //mensagem de que a pessoa votou
                alert("Você selecionou a opção 1 - \"" + opcao1 + "\"")
                break
            case 2:
                votosOp2.current++
                adicionarLinha({op1: 0, op2: 1, indice: index.current})
                alert("Você selecionou a opção 2 - \"" + opcao2 + "\"")
                break
            default:
                alert("Opção inexistente!")
        }

        //verifica se a quantidade de votos é maior que 0
        if(votosOp1.current > 0 || votosOp2.current > 0) {
            setVotValor(1)
        }

        //verifica se a quantidade de votos são diferentes
        if(votosOp1.current != votosOp2.current) {
            setDiferente(1)
        } else {
            setDiferente(0)
        }
        
    }

    //função para parar a votação
    function pararVotacao() {
        //verificação das condicionais para que a votação pare
        if(votValor == 1 && votosOp1.current != votosOp2.current) {
            //pegando os elementos HTML com o js DOM
            const v1 = document.getElementById('votos-1')
            const v2 = document.getElementById('votos-2')
            const venc = document.getElementById('vencedor')

            //garantir que os componentes HTML existem
            if (v1 && v2 && venc) {
                //alterando os valores
                v1.textContent = votosOp1.current + " votos"
                v2.textContent = votosOp2.current + " votos"
                venc.textContent = votosOp1.current > votosOp2.current ? "Opção 1 - \"" + opcao1 + "\"" : "Opção 2 - \"" + opcao2 + "\""

                const res = document.getElementById('resultado')
                res?.setAttribute("class", "border rounded-md bg-slate-200 w-2/3 max-w-full overflow-auto break-words flex justify-between flex-wrap md:flex-row")

                //desabilitando os botões
                setDesabilitado(true)

                //terminando de atualizar os demais dados
                setBotaoPressionado(1)
                setVotacaoAndamento(0)
            }
        } else {
            alert("Deve ter pelo menos um voto e não pode empate")
        }
    }

    //função para voltar
    function voltar() {
        setDesabilitado(false)
        document.getElementById('resultado')?.setAttribute("class", "hidden")
        navigate(-1)
    }

    //função que adiciona uma nova linha na tabela
    function adicionarLinha(dados: {op1: number, op2: number, indice: number}){
        let bodyTable = document.getElementById("bodyTable")

        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")

        th.textContent = dados.indice + "°"
        th.setAttribute("scope", "row")
        td1.textContent = dados.op1.toString()
        td1.setAttribute("class", "border p-1 text-center")
        td2.textContent = dados.op2.toString()
        td2.setAttribute("class", "border p-1 text-center")

        tr.appendChild(th)
        tr.appendChild(td1)
        tr.appendChild(td2)

        bodyTable?.appendChild(tr)
    }

    return (
        <div className="bg-slate-800 w-screen h-screen overflow-x-hidden gap-2 flex flex-col p-2">
            <div className="flex items-start">
                <Button descricao="Voltar" createDados={voltar} disabled={false}/>
            </div>
            <div className="flex justify-between h-full w-full">
                <div className="bg-slate-500 h-full w-full p-2 border flex flex-col items-center gap-20">
                    <div className="text-2xl mt-5 font-bold">
                        {descricao}
                    </div>
                    <div className="flex justify-center items-center gap-x-40">
                        <div className="flex flex-col items-center gap-2 border rounded-md p-2 bg-slate-600">
                            <span className="border rounded-md text-2xl bg-slate-200 p-1">Opção 1</span>
                            <Button descricao={opcao1} createDados={() => { votar(1) }} disabled={desabilitado}/>
                        </div>
                        <div className="flex flex-col items-center gap-2 border rounded-md p-2 bg-slate-600">
                            <span className="border rounded-md text-2xl bg-slate-200 p-1">Opção 2</span>
                            <Button descricao={opcao2} createDados={() => { votar(2) }} disabled={desabilitado}/>
                        </div>
                    </div>
                    <div className="">
                        <Button descricao={"Parar votação"} createDados={pararVotacao} disabled={desabilitado}/>
                    </div>
                    <div className={"hidden"} id="resultado">
                        <div className=" flex flex-col">
                            <div className="flex flex-col items-center p-1">
                                <span className="font-bold">Total de Votos</span>
                                <div className="flex gap-2 flex-wrap w-full">
                                    <div className="flex flex-col items-center min-w-0">
                                        <span className="font-bold">Opção 1</span>
                                        <span className="break-words" id="votos-1">5 votos</span>
                                    </div>
                                    <div className="h-full border"></div>
                                    <div className="flex flex-col items-center min-w-0">
                                        <span className="font-bold">Opção 2</span>
                                        <span className="break-words" id="votos-2">10 votos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 flex flex-col items-center">
                            <span className="font-bold">Vencedor</span>
                            <span id="vencedor">opção 1 - "por cima"</span>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-black h-full"></div>
                <ParteDireita andamento={votacaoAndamento} qnt={votValor} pressButton={botaoPressionado} diferente={diferente}/>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-white font-bold">Sistema desenvolvido exclusivamente para o seminário de EDG1 - turma B</span>
                <span className="text-white font-bold">Autores: Yudi, Renato, Otavio, Mateus, José Vitor</span>
            </div>
        </div>
    )
}

export default Principal