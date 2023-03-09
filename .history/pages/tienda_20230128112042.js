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


export async function getStaticProps()  {
    const url = await fetch('http://localhost:3000/api/teclados')
    const res = await res.json(url)
  
    return {
      props: {
        
      },
    }
  }


export default Tienda