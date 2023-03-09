//nect
import Link from 'next/link';

//Components
import Layout from '../components/Layout';


const Error = () => {
    return (
        <section className="section" id="about">
            <div className='C'>
                <p className='section-title'>Pagina no encontrada</p>

                <Link href='/'>Volver</Link>
            </div>
        </section>
    );
}

export default Error;