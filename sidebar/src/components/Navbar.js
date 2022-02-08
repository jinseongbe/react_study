import React, {useState} from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; // import {FaBars} from "react-icons/fa" 이 코드는 좌측 코드로 단축해 사용 가능 (<FaBars/>)
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons' // 사용한 icon의 속성을 변경할수 있게 해주기위해(ex. color)


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{color: '#fff'}}>

            <div className="navBar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    );
}

export default Navbar;



