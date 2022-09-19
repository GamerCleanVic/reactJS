type Props = {
    text: string;
    clickFn: (txt: string) => void;
}
    const Botao = ({text, clickFn}: Props) => {
    const handleClick = () => {
        clickFn("FRASE");
    }
    return (
        <button onClick={handleClick} className="btn1">
            {text}
        </button>
    );
}

export default Botao;