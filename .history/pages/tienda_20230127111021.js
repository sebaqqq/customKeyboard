'use client';

//components
import Layout from "../components/Layout";

//consultar API
export const getServerSideProps = async () => {
    //const url = `${process.env.API_URL}/venta-keyboards/`
    const url 
    const respuesta = await fetch(url)
    const teclados = await respuesta.json()
    
    return {
        props: {
            teclados
        }
    }
}

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



export default Tienda