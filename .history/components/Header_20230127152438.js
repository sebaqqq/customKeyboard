//next
import Link from "next/link"
import Image from 'next/image';

//fontawesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faBars
)

const links = [{
    label: 'Home',
    route: '/',
},{
    label: 'Tipos de Teclado',
    route: '/keyboardAbout'
},{
    label: 'Desarrolladores',
    route: '/about'
},{
    label: 'Tienda',
    route: '/tienda'
}]



export default function Navigation () {

    function visualizarMenu () {
        const menu = document.getElementById('navbarSupportedContent');
        const icono = document.getElementById('icono');
        if (menu.className.contains('show')) {
            menu.class.remove('show');
            icono.classList.remove('fa-times');
            icono.classList.add('fa-bars');
        } else {
            menu.classList.add('show');
            icono.classList.remove('fa-bars');
            icono.classList.add('fa-times');
        }
    }

    return (
        <>
            <nav id="scrollspyh" className={"navbar navbar-light bg-light navbar-expand-lg fixed-top"} data-spy="affix" data-offset-top="20">
                <div className="container">
                    <Link href="/">
                        <Image
                            src= {'/../public/logo.jpeg'}
                            alt="navbarImage"
                            width={70}
                            height={60}
                            className="brand-img"
                        />
                    </Link>
                    <button
                        className='navbar-toggler'
                        
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => visualizarMenu()}
                        >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {links.map(({ label, route }) => (
                                <li key={route} className="nav-item">
                                    <Link href={route} className="nav-link">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
