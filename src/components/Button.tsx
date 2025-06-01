interface ButtonProps {
    descricao: string|null,
    createDados: () => any,
    disabled: boolean
}

function Button(props: ButtonProps) {
    return (
        <button type="button" className="border-1 rounded-md p-2 cursor-pointer bg-slate-600 text-zinc-300" onClick={props.createDados} disabled={props.disabled}>
            {props.descricao}
        </button>
    )
}

export default Button