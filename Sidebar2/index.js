import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { HiPhone } from 'react-icons/hi';
import { SidebarData } from './SidebarData';
import './style.scss';
import { IconContext } from 'react-icons';


const Sidebar2 = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    if (sidebar === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }


    return (
        <>
            <IconContext.Provider value={{ color: '#292929' }}>
                <div className="navbar">
                    <div className='menu-ham'>
                        <FaBars onClick={showSidebar} />
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <div to='#' className='menu-bars'>
                                <AiOutlineClose />
                            </div>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            )
                        })}
                        <div className="infos">

                            <div className="fb">
                                <FaFacebookF className='facebook' />
                                <a href="https://facebook.com/jugometal">Jugometal</a>
                            </div>


                            <div className='telefon'>
                                <HiPhone className='telefon-icon' />
                                <a href="tel:+38135312391">035/312-391</a>
                            </div>

                            <div className='email'>
                                <BsFillEnvelopeFill className='email-envelope' />
                                <a href="mailto:jugometal.co.rs">jugometal.co.rs</a>
                            </div>

                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}


export default Sidebar2;