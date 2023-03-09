import Head from 'next/head'
import Image from 'next/image'
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

//Images
import imagehome from '../public/matcha1.jpg'
import card from '../public/matcha2.jpeg'
import imagenProduct1 from '../public/product1.jpg'


export default function Home() {
  return (
      <>
        <Layout>

        </Layout> 
      </>
  );
}

