//components
import Layout from "../components/Layout";

//database
import { database } from "../database/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


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



export default Tienda