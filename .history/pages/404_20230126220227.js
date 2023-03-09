//nect
import Link from 'next/link';

import styles 

const Error = () => {
    return (
        <div className='container'>
            <p className='section-title'>Pagina no encontrada</p>

            <Link href='/'>Volver</Link>
        </div>

    );
}

export default Error;