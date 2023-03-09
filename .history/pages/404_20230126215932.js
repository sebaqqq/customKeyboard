//nect
import Link from 'next/link';

//Components
import Layout from '../components/Layout';


const Error = () => {
    return (
        <Layout>
            <p className='section-title'>Pagina no encontrada</p>

            <Link href='/'></Link>
        </Layout>
    );
}

export default Error;