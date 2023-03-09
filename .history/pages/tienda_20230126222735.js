import Layout from "../components/Layout";

const Tienda = () => {
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
    const url = `${process.env.API_URL}/venta-keyboards`;
    const res = await fetch(url);
    const keyboards = await res.json();

    return {
        props: {
            keyboards
        }
    ]
}

export default Tienda