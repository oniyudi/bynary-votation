function ParteDireita() {
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
                    <tbody>
                        <tr>
                            <th scope="row">1°</th>
                            <td className="border p-1 text-center">0</td>
                            <td className="border p-1 text-center">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col">
                <div>
                    <span className="font-bold">Votação em andamento: </span>
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}

export default ParteDireita