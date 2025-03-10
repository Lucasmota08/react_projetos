import { useState, useEffect } from "react";
import styles from './Inicio.module.css';
import sorveteLoading from "../images/sorveteLoading.png";
import sorveteColorido from "../images/sorveteLoaded_chocolate.png";
import unidade from "../images/unidade.png";
import sorvete from "../images/sorvete_casquinha.png";
import picole from "../images/picole.png";
import açai from "../images/açai.png";
import navbarStyles from '../components/Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";

function Inicio() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Lógica do Scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 400);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Lógica do Carregamento
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);
    
        // Cleanup: Removendo evento de scroll e limpando o intervalo
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    // Tela de carregamento
    // if (isLoading) {
    //     return (
    //         <div className={styles.loadingScreen}>
    //             <div className={styles.loadingContainer}>
    //                 <div className={styles.sorveteLoader}>
    //                     <img src={sorveteColorido} alt="Sorvete" 
    //                         style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }} />
    //                     <img src={sorveteLoading} alt="Sorvete Preto e Branco" />
    //                 </div>
    //                 <p className={styles.loadingText}>Projeto em andamento</p>
    //             </div>
    //         </div>
    //     );
    // }

    function showMenu() {
        if (isActive) {
            setIsExiting(true);
            setTimeout(() => {
                setIsActive(false);
                setIsExiting(false);
            }, 500);
        } else {
            setIsActive(true);
        }
    }    
      
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

            {/*  menu de opções */}
            <div className={`${styles.showMenu} ${isActive ? styles.active : ""} ${isExiting ? styles.exiting : ""}`}>
                <FiAlignJustify onClick={showMenu} className={styles.menuIcon}/>
                <ul>
                    <li className={styles.greenLi}>Peça já</li>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Unidades</li>
                    <li>Seja um parceiro</li>
                    <li>Políticas de privacidade</li>
                </ul>
            </div>

            {/* navbar para a página Inicio */}
            <section className={styles.first}>
                <div className={styles.navbarAbsolute}>
                    <div className={styles.navbarAbsoluteContainer}>
                        <FiAlignJustify className={navbarStyles.opacity0}/>
                        <div className={navbarStyles.Logo}>
                            <img src="" alt="" />
                        </div>
                        <FiAlignJustify onClick={showMenu} className={navbarStyles.menu}/>
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