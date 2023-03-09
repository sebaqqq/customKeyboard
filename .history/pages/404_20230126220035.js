//nect
import Link from 'next/link';

//Components
import Layout from '../components/Layout';


const Error = () => {
    return (
        <div>
            <p className='section-title'>Pagina no encontrada</p>

            <Link href='/'>Volver</Link>
        </Layout>
    );
}

export default Error;