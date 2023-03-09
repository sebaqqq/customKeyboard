//componenets
//import Listado from '../components/Listado';
import Layout from '../components/Layout';



const buyPage = () => {
    return (
        <>  
            <Layout
                pagina= "Tienda"
            >
            </Layout>
        </>
    );
}

// // export async function getServerSideProps() {
// //     const url = `${process.env.API_URL}/keyboards`;
// //     const res = await fetch(url);
// //     const keyboard = await res.json();
// //     console.log(keyboard);
// //     return {
// //         props: {
// //             keyboard
// //         }
// //     }
// // }


export default buyPage;