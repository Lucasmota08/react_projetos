import styles from './Footer.module.css';

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <img src="" alt="" />
                <div className='navegacao'>
                    <a>Peça já</a>
                    <a>Sobre nós</a>
                    <a>Produtos</a>
                    <a>Unidades</a>
                    <a>Seja um parceiro</a>
                    <a>Políticas de Privacidade</a>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
                <p>2026 | Feito por <a href="https://github.com/lucasmota08" target="_blank" rel="noopener noreferrer">Lucas Mota</a></p>
        </div>
    )
}

export default Footer