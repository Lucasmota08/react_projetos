import { useState } from "react";
import navbarStyles from './Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {    
    const [isActive, setIsActive] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
        
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

    return(
        <div className={navbarStyles.navbar}>
            <div className={navbarStyles.container}>
                <FiAlignJustify className={navbarStyles.opacity0}/>
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
                <FiAlignJustify onClick={showMenu} className={navbarStyles.menu}/>
            </div>

            {/*  menu de opções */}
            <div className={`${navbarStyles.showMenu} ${isActive ? navbarStyles.active : ""} ${isExiting ? navbarStyles.exiting : ""}`}>
                <FiAlignJustify onClick={showMenu} className={navbarStyles.menuIcon}/>
                <ul>
                    <li className={navbarStyles.greenLi}>Peça já</li>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Unidades</li>
                    <li>Seja um parceiro</li>
                    <li>Políticas de privacidade</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar