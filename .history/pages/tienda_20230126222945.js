import Layout from "../components/Layout";

const Tienda = ({}) => {

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


export async function getServerSideProps() {
    const url = `http://localhost:1337/api/venta-keyboards/`;
    const respuesta = await fetch(url);
    const keyboards = await respuesta.json();

    

    return {
        props: {
            keyboards
        }
    }
}

export default Tienda