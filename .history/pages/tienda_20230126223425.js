'use client';

//components
import Layout from "../components/Layout";

const Tienda = (keyboards) => {

    console.log(keyboards);

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

export const getServerSideProps = async () => {
    const url = `${process.env.API_URL}/venta-keyboards/`
    const respuesta =  fetch(url)
    const keyboards = await respuesta.json()
    
    return {
        props: {
            keyboards
        }
    }
}

export default Tienda