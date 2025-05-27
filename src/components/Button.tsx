interface ButtonProps {
    descricao: string,
    createDados: any
}

function Button(props: ButtonProps) {
    return (
        <button type="button" className="border-1 rounded-md p-2 cursor-pointer bg-slate-600 text-zinc-300" onClick={props.createDados}>
            {props.descricao}
        </button>
    )
}

export default Button