import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/Button"

function Principal() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const descricao = searchParams.get("descricao")
    const opcao1 = searchParams.get("opcao1")
    const opcao2 = searchParams.get("opcao2")
    return (
        <div className="bg-slate-800 w-screen h-screen overflow-x-hidden gap-2 flex flex-col p-2">
            <div className="flex items-start">
                <Button descricao="Voltar" createDados={() => navigate(-1)} />
            </div>
            <div className="flex justify-between h-full w-full">
                <div className="bg-slate-500 h-full w-full p-2 border flex justify-center">
                    <div className="text-2xl">
                        {descricao}
                    </div>
                </div>
                <div className="border-4 border-black h-full"></div>
                <div className="bg-slate-300 h-ful w-full p-2 border">
                    Tchau
                </div>
            </div>
        </div>
    )
}

export default Principal