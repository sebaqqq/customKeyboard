//components
import Layout from "../components/Layout";

const Tienda = (teclados) => {

    console.log(teclados);

    return (
        <>
            <Layout
                pagina= "Tienda"
            >
                <section className="section" id="testmonial">
                    <div className="container">
                        <h1 className="section-title mb-4">Tienda</h1>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const url = 'http://localhost:1337/api/venta-keyboards'
    const respuesta =  fetch(url);
    const teclados = await respuesta.json();

    console.log(teclados);

    return {
        props: {
            teclados
        }
    }   
}

export default Tienda