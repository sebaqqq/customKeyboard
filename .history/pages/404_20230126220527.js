//nect
import Link from 'next/link';

import styles from '../styles/404.module.css';

const Error = () => {
    return (
        <div className={styles.no_encontrado}>
            <p className='title'>Pagina no encontrada</p>

            <Link href='/'>Volver</Link>
        </div>

    );
}

export default Error;