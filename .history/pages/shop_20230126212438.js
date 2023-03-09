//componenets
//import Listado from '../components/Listado';
import Layout from '../components/Layout';

//FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { 
    faPhoneVolume,
    faInbox
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faFacebook,
    faInstagram,
    faTiktok,
    faPhoneVolume,
    faInbox
)


const buyPage = ({keyboard}) => {
    return (
        <>  
            <Layout
                pagina= "Tienda"
            >

            </Layout>
        </>
    );
}



export default buyPage;