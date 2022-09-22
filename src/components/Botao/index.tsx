import styles from './styles.module.css';

const Botao = () => {
    return(
        <div className={styles.square}>
            <button className={styles.btn1}>
                Clique aqui
            </button>
            <p className={styles.legend}>
                Legenda
            </p>
        </div>
    );
}

export default Botao;