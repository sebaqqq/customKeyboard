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


// export async function getStaticProps() {
//     const url = `https://my-url`
//     const result = await fetch(url)
//     return { props: {
//       result: await result.json()
//     }}
// }

export async function getStaticProps() {
    //const url = 'http://localhost:1337/api/venta-keyboards'
    const url = `${process.env.API_URL}/keyboards`
    const result = await fetch(url)
    return { props: {
        teclados: await result.json()
    }}
}

export default Tienda