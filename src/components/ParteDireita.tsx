function ParteDireita(props: {qnt: number, pressButton: number, andamento: number, diferente: number}) {
    return (
        <div className="bg-slate-300 h-ful w-full p-4 border flex justify-around">
            <div>
                <table className="border border-collapse">
                    <thead>
                        <tr>
                            <th scope="col" className="border p-1">Turno</th>
                            <th scope="col" className="border p-1">Opção 1</th>
                            <th scope="col" className="border p-1">Opção 2</th>
                        </tr>
                    </thead>
                    <tbody id="bodyTable"></tbody>
                </table>
            </div>
            <div className="flex flex-col gap-2">
                <div className="border-b">
                    <span className="font-bold">Quantidade de votos é maior que 0: </span>
                    <span className="font-bold">{props.qnt}</span>
                </div>
                <div className="border-b">
                    <span className="font-bold">A quantidade de votos são diferentes: </span>
                    <span className="font-bold">{props.diferente}</span>
                </div>
                <div className="border-b">
                    <span className="font-bold">botão "parar votação" foi pressionado: </span>
                    <span className="font-bold">{props.pressButton}</span>
                </div>
                <div className="border-b">
                    <span className="font-bold">Votação em andamento: </span>
                    <span className="font-bold">{props.andamento}</span>
                </div>
            </div>
        </div>
    )
}

export default ParteDireita