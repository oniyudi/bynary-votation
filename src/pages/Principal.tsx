import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/Button"
import { useState } from "react"
import ParteDireita from "../components/ParteDireita"

function Principal() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [desabilitado, setDesabilitado] = useState(false)
    const descricao = searchParams.get("descricao")
    const opcao1 = searchParams.get("opcao1")
    const opcao2 = searchParams.get("opcao2")
    let votosOp1 = 0
    let votosOp2 = 0

    function votar(op: number) {
        switch(op){
            case 1:
                votosOp1++
                alert("Você selecionou a opção 1 - \"" + opcao1 + "\"")
                break
            case 2:
                votosOp2++
                alert("Você selecionou a opção 1 - \"" + opcao1 + "\"")
                break
            default:
                alert("Opção inexistente!")
        }
    }

    function pararVotacao() {
        const v1 = document.getElementById('votos-1')
        const v2 = document.getElementById('votos-2')
        const venc = document.getElementById('vencedor')

        if (v1 && v2 && venc) {
            v1.textContent = votosOp1 + " votos"
            v2.textContent = votosOp2 + " votos"
            venc.textContent = votosOp1 > votosOp2 ? "Opção 1 - \"" + opcao1 + "\"" : "Opção 2 - \"" + opcao2 + "\""

            const res = document.getElementById('resultado')
            res?.setAttribute("class", "border rounded-md bg-slate-200 w-2/3 max-w-full overflow-auto break-words flex justify-between flex-wrap md:flex-row")

            setDesabilitado(true)
        }
    }

    function voltar() {
        setDesabilitado(false)
        document.getElementById('resultado')?.setAttribute("class", "hidden")
        navigate(-1)
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
                <ParteDireita/>
            </div>
        </div>
    )
}

export default Principal