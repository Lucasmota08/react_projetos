import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <h3>Sem Nome</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.navegacao}>
                    <a>Privacidade</a>
                    <a>Termos</a>
                    <a>Contato</a>
                </div>
            </div>
            <div className={styles.desenvolvedor}>
                <p>2026 | Feito por <a href="https://github.com/lucasmota08" target="_blank" rel="noopener noreferrer">Lucas Mota</a></p>
            </div>
        </div>
    )
}

export default Footer