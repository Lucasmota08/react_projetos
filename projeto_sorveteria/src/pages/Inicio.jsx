import { useState, useEffect } from "react";
import styles from './Inicio.module.css';
import sorveteLoading from "../images/sorveteLoading.png";
import sorveteColorido from "../images/sorveteLoaded_chocolate.png";
import unidade from "../images/unidade.png";
import fundo from "../images/fundo.png";

import sorvete from "../images/images_3.png";
import picole from "../images/images_2.png";
import açai from "../images/images_1.png";
import navbarStyles from '../components/Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import { LuBuilding } from "react-icons/lu";
import { IoIceCreamOutline } from "react-icons/io5";
import { MdOutlineIcecream } from "react-icons/md"
import { FaStar } from "react-icons/fa6";

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
    if (isLoading) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.loadingContainer}>
                    <div className={styles.sorveteLoader}>
                        <img src={sorveteColorido} alt="Sorvete" 
                            style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }} />
                        <img src={sorveteLoading} alt="Sorvete Preto e Branco" />
                    </div>
                    <p className={styles.loadingText}>Projeto em desenvolvimento</p>
                </div>
            </div>
        );
    }

    function showMenu() {
        console.log("Antes do clique:", isActive);
        if (isActive) {
            setIsExiting(true);
            setTimeout(() => {
                setIsActive(false);
                setIsExiting(false);
                console.log("Menu fechado");
            }, 500);
        } else {
            setIsActive(true);
            console.log("Menu aberto");
        }
    }
     
    return (
        <div className={styles.inicio}>

            {/* Navbar depois de scrollar */}
            {isScrolled && (
                <div className={navbarStyles.navbar}>
                    <div className={navbarStyles.container}>
                        <FiAlignJustify onClick={showMenu} className={navbarStyles.menu}/>
                        <div className={navbarStyles.meio}>
                            <div className={navbarStyles.Logo}>
                                <img src="" alt="" />
                            </div>
                            <div className={navbarStyles.opcoes}>
                                <ul>
                                    <li><a href="">Peça já</a></li>
                                    <li><a href="">Sobre nós</a></li>
                                    <li><a href="">Produtos</a></li>
                                    <li><a href="">Unidades</a></li>
                                    <li><a href="">Seja um parceiro</a></li>
                                    <li><a href="">Políticas de Privacidade</a></li>
                                </ul>
                            </div>
                        </div>
                        <FiAlignJustify className={navbarStyles.opacity0}/>
                    </div>
                </div>
            )}

            {/*  menu de opções */}
            <div className={`${styles.showMenu} ${isActive ? styles.active : ""} ${isExiting ? styles.exiting : ""}`}>
                <FiAlignJustify onClick={showMenu} className={styles.menuIcon}/>
                <ul>
                    <li className={navbarStyles.greenLi}><a href="">Peça já</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Unidades</a></li>
                    <li><a href="">Seja um parceiro</a></li>
                    <li><a href="">Políticas de Privacidade</a></li>
                </ul>
            </div>

            {/* navbar para a página Inicio */}
            <section className={styles.first}>
                <div className={styles.navbarAbsolute}>
                    <div className={styles.navbarAbsoluteContainer}>
                        <FiAlignJustify onClick={showMenu} className={navbarStyles.menu}/>
                        <div className={navbarStyles.meio}>
                            <div className={navbarStyles.Logo}>
                                <img src="" alt="" />
                            </div>
                            <div className={navbarStyles.opcoes}>
                                <ul>
                                    <li><a href="">Peça já</a></li>
                                    <li><a href="">Sobre nós</a></li>
                                    <li><a href="">Produtos</a></li>
                                    <li><a href="">Unidades</a></li>
                                    <li><a href="">Seja um parceiro</a></li>
                                    <li><a href="">Políticas de Privacidade</a></li>
                                </ul>
                            </div>
                        </div>
                        <FiAlignJustify className={navbarStyles.opacity0}/>
                    </div>
                </div>
                <div className={styles.firstCard}>
                    <div className={styles.firstTexto}>
                        <h1>O melhor sorvete <br /> do país</h1>
                        <p className={styles.p1}>Sorvetes artesanais feitos com ingredientes premium, muito carinho e a textura perfeita para derreter na boca.</p>
                        <a href="">Peça já</a>
                    </div>
                    <div className={styles.imgFundo}>
                        <img src={fundo} alt="" />
                    </div>
                </div>
            </section>

            {/* Onde encontrar?*/}
            <section className={styles.unidades}>
                <FiMapPin className={styles.meuIcone} />
                <p>Onde encontrar?</p>
                <ul className={styles.lista_unidades}>
                    <li><a href="">
                        <FiShoppingBag className={styles.unidadeA} />
                        <div className={styles.textoUnidade}>
                            <p className={styles.unidade_titulo}>Unidade A</p>
                            <p>Endereço</p>
                            <div className={styles.barraOculta}></div>
                            <p className={styles.horario}>Horário</p>
                        </div>
                        </a></li>
                    <li><a href="">
                        <LuBuilding className={styles.unidadeB} />
                        <div className={styles.textoUnidade}>
                            <p className={styles.unidade_titulo}>Unidade B</p>
                            <p>Endereço</p>
                            <div className={styles.barraOculta}></div>
                            <p className={styles.horario}>Horário</p>
                        </div>
                        </a></li>
                    <li><a href="">
                        <FiFeather className={styles.unidadeC} />
                        <div className={styles.textoUnidade}>
                            <p className={styles.unidade_titulo}>Unidade C</p>
                            <p>Endereço</p>
                            <div className={styles.barraOculta}></div>
                            <p className={styles.horario}>Horário</p>
                        </div>
                        </a></li>
                </ul>
                <button className={styles.ver_unidades}>
                    <p><strong>Ver todas as unidades</strong></p>
                </button>
            </section>

            <section className={styles.produtos}>
                <IoIceCreamOutline  className={styles.meuIcone} />
                <p>Conheça nossos produtos</p>
                <ul className={styles.lista_produtos}>
                    <li>
                        <MdOutlineIcecream className={styles.produtoA}/>
                        <p>Chocolate Belga</p>
                        <div className={styles.valorProduto}>R$</div>
                    </li>
                    <li>
                        <MdOutlineIcecream className={styles.produtoB}/>
                        <p>Baunilha Bourbon</p>
                        <div className={styles.valorProduto}>R$</div>
                    </li>
                    <li>
                        <MdOutlineIcecream className={styles.produtoC}/>
                        <p>Pistache Siciliano</p>
                        <div className={styles.valorProduto}>R$</div>
                    </li>
                    <li>
                        <MdOutlineIcecream className={styles.produtoD}/>
                        <p>Morango</p>
                        <div className={styles.valorProduto}>R$</div>
                    </li>
                </ul>
                <button className={styles.ver_produtos}>
                    <p><strong>Ver todos os produtos</strong></p>
                </button>
            </section>

            <section className={styles.feedback}>
                <p>Feedbacks</p>
                <ul className={styles.feedbacks}>
                    <li>
                        <p className={styles.estrelas}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <i><p>"O melhor sorvete de pistache que já comi! A textura é incrivelmente cremosa e o sabor é autêntico. O ambiente da loja do centro é super acolhedor."</p></i>
                        <p className={styles.nomeDoCliente}>- Gabriel Silva</p>
                    </li>
                    <li>
                        <p className={styles.estrelas}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <i><p>"Sou cliente fiel! A casquinha artesanal faz toda a diferença. O sabor de chocolate belga é imperdível para quem ama cacau intenso."</p></i>
                        <p className={styles.nomeDoCliente}>- Matheus Eduardo</p>
                    </li>
                    <li>
                        <p className={styles.estrelas}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <i><p>"Ambiente agradável e atendimento excepcional. Adoro levar meus filhos no final de semana na loja do parque. Opções veganas excelentes."</p></i>
                        <p className={styles.nomeDoCliente}>- Sophia Rodrigues</p>
                    </li>
                </ul>
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