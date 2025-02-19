import navbarStyles from './Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {    
    return(
        <div className={navbarStyles.navbar}>
            <div className={navbarStyles.container}>
                <FiAlignJustify className={navbarStyles.opacity0}/>
                <div className={navbarStyles.Logo}>
                    <img src="" alt="" />
                </div>
                <FiAlignJustify className={navbarStyles.menu}/>
            </div>
        </div>
    )
}

export default Navbar