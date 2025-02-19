import { useState, useEffect } from "react";
import styles from './Inicio.module.css';
import unidade from "../images/unidade.png";
import sorvete from "../images/sorvete_casquinha.png";
import picole from "../images/picole.png";
import açai from "../images/açai.png";
import navbarStyles from '../components/Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";

function Inicio() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.inicio}>

            {isScrolled && (
                <div className={navbarStyles.navbar}>
                    <div className={navbarStyles.container}>
                        <FiAlignJustify className={navbarStyles.opacity0}/>
                        <div className={navbarStyles.Logo}>
                            <img src="" alt="" />
                        </div>
                        <FiAlignJustify className={navbarStyles.menu}/>
                    </div>
                </div>
            )}

            <section className={styles.first}>
                <div className={styles.navbarAbsolute}>
                    <div className={styles.navbarAbsoluteContainer}>
                        <FiAlignJustify className={navbarStyles.opacity0}/>
                        <div className={navbarStyles.Logo}>
                            <img src="" alt="" />
                        </div>
                        <FiAlignJustify className={navbarStyles.menu}/>
                    </div>
                </div>
                <h1>"O melhor sorvete do país"</h1>
                <a href="">Peça já</a>
            </section>

            <section className={styles.unidades}>
                <p>Onde encontrar?</p>
                <ul className={styles.lista_unidades}>
                    <li><a href="">
                        <img src={unidade} alt="" />
                        <div>
                            <p className={styles.unidade_titulo}>Unidade A</p>
                            <p>Endereço</p>
                        </div>
                        </a></li>
                    <li><a href="">
                        <img src={unidade} alt="" />
                        <div>
                            <p className={styles.unidade_titulo}>Unidade A</p>
                            <p>Endereço</p>
                        </div>
                        </a></li>
                    <li><a href="">
                        <img src={unidade} alt="" />
                        <div>
                            <p className={styles.unidade_titulo}>Unidade A</p>
                            <p>Endereço</p>
                        </div>
                        </a></li>
                </ul>
                <button className={styles.ver_unidades}>
                    <p>Ver todas as unidades</p>
                </button>
            </section>

            <section className={styles.produtos}>
                <p>Conheça nossos produtos</p>
                <ul className={styles.lista_produtos}>
                    <li className={styles.sorvetes}>
                        <p>Sorvetes</p>
                        <img src={sorvete} alt="" /></li>
                    <li  className={styles.picoles}>
                        <p>Picolés</p>
                        <img src={picole} alt="" /></li>
                    <li  className={styles.açai}>
                        <p>Açaí</p>
                        <img src={açai} alt="" /></li>
                </ul>
                <button className={styles.ver_produtos}>
                    <p>Ver todos os produtos</p>
                </button>
            </section>

            <section className={styles.feedbacks}>
                <p>Feedbacks</p>
                <div className={styles.feedback}>
                    <p>a</p>
                    <p></p>
                </div>

            </section>

            <section className={styles.sobre}>
                <p>Sobre nós</p>
                <section >

                </section>
            </section>

            <section className={styles.menu}>
                <p>menu</p>
            </section>
        </div>
    )
}

export default Inicio