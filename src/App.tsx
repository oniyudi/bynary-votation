function App() {

  return (
    <div className="bg-slate-500 flex flex-col items-center h-screen w-screen p-1 gap-5">
      <div className="font-bold text-3xl">
        VOTAÇÃO BINÁRIA
      </div>

      <div className="border-2 rounded-2xl h-1/2 w-1/2 bg-slate-400 p-2 flex flex-col items-center text-lg gap-10">
        <div className="flex flex-col w-full gap-1">
          <span>Informe o tema a ser votado:</span>
          <input type="text" name="descricao" className="bg-zinc-300 rounded"/>
        </div>
        <div className="flex justify-between w-5/6">
            <div className="border-2 w-1/3 rounded-md flex flex-col items-center p-2 gap-2">
              opção 1
              <input type="text" name="op-1" className="w-full bg-zinc-300 rounded"/>
            </div>
            <div className="border-2 w-1/3 rounded-md flex flex-col items-center p-2 gap-2">
              opção 2
              <input type="text" name="op-2" className="w-full bg-zinc-300 rounded"/>
            </div>
        </div>
        <button type="submit" className="border-1 rounded-md p-2 cursor-pointer bg-slate-600 text-zinc-300">Começar votação</button>
      </div>
    </div>
  )
}

export default App
