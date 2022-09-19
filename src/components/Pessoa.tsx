type Props = {
    data: {
        name: string;
        age: number;
    }
}
const Pessoa = ({data}: Props) => {
    return(
        <div className="tableTest">
            {data.name} - {data.age} anos.
        </div>
    );
}

export default Pessoa;