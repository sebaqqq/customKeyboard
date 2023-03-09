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
    const res = await fetch('http://localhost:3000/api/tienda')
    
    return {
        props: {
            teclados,
        },
    }
}


export default Tienda