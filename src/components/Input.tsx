interface InputProps {
    name: string;
    op: string;
    setOpcao: any;
}

function Input(props: InputProps) {
    return (
        <input type="text" name={props.name} className="w-full bg-zinc-300 rounded" value={props.op} onChange={(e) => props.setOpcao(e.target.value)} />
    )
}

export default Input