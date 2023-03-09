//nect
import Link from 'next/link';

import styles from '../styles/404.module.css';

const Error = () => {
    return (
        <div className= >
            <p className='section-title'>Pagina no encontrada</p>

            <Link href='/'>Volver</Link>
        </div>

    );
}

export default Error;