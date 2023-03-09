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
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { props: { stars: json.stargazers_count } }
}

export default Tienda