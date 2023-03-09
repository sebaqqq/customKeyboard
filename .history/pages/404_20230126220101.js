//nect
import Link from 'next/link';

//Components
import Layout from '../components/Layout';


const Error = () => {
    return (
        <section className="section" id="about">
        <div>
            <p className='section-title'>Pagina no encontrada</p>

            <Link href='/'>Volver</Link>
        </div>
    );
}

export default Error;