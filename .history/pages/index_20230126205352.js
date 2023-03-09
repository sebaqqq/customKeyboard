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

        <header id="home" className="header">
          <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">  
              <div className="container">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <div className="carousel-caption d-none d-md-block">
                            <h1 className="carousel-title">keyboard System Custom</h1>  
                          </div>
                      </div>
                  </div>
              </div>        
          </div>
          <div className="infos container mb-4 mb-md-2">
              <div className="title">
                  <h6 className="subtitle font-weight-normal">Personaliza tu Teclado</h6>
                  <h5>Que nunca te falten los puntos ...</h5>
              </div>
              <div className="socials text-right">
                  <div className="row justify-content-between">
                      <div className="col">
                          <a className="d-block subtitle"><FontAwesomeIcon icon={faPhoneVolume} style={{width: '3%', margin: 'auto', display: 'inline-block'}}/> +569 55667788</a>
                          <a className="d-block subtitle"><FontAwesomeIcon icon={faInbox} style={{width: '3%', margin: 'auto', display: 'inline-block'}}/> keyboardsSystemCustom@gmail.com</a>
                      </div>
                  </div>
              </div>
          </div>
        </header>
        <section className="section" id="about">
        <div className="container">
            <div className="row align-items-center mr-auto">
                <div className="col-md-4">
                    <h6 className="xs-font mb-0">¿Quién Somos?</h6>
                    <h3 className="section-title">Sobre Nosotros </h3>
                    <p>Nos dedicamos a la venta de switches y keycaps. Para que puedas personalizar tu teclado al máximo. ¡ Envios a Todo Chile !.</p>
                </div>
                <div className="col-sm-6 col-md-4 ml-auto">
                    <div className="widget">
                        <div className="icon-wrapper">
                            <i className="ti-calendar"></i>
                        </div>
                        <div className="infos-wrapper">
                            <h4 className="text-primary">15+</h4>
                            <p>Personas que Visitaron la Página</p>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="icon-wrapper">
                            <i className="ti-face-smile"></i>
                        </div>
                        <div className="infos-wrapper">
                            <h4 className="text-primary">125+</h4>
                            <p>Personas que Compraron</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="widget">
                        <div className="icon-wrapper">
                            <i className="ti-star"></i>
                        </div>
                        <div className="infos-wrapper">
                            <h4 className="text-primary">3434+</h4>
                            <p>Envíos Realizados</p>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="icon-wrapper">
                            <i className="ti-user"></i>
                        </div>
                        <div className="infos-wrapper">
                            <h4 className="text-primary">80+</h4>
                            <p>Clientes Felices</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        </section>


        <section className="section">
        <div className="container">
            <h6 className="xs-font mb-0">¿Ques es?</h6>
            <h3 className="section-title mb-4">¿De que se trata Keys Keyboard?</h3>
            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card border-0 text-dark">
                        <Image
                          src= {imagehome}
                          alt="teclado2"
                          width={350}
                          height={250}
                          className='card-img-top'
                        />
                        <span className="card-body">
                            <h4 className="title mt-4">Codificación / Diseño</h4>
                            <p className="name">Quieres que tú teclado se vea bonito, es tu oportunidad de darle un cambio</p>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 text-dark">
                        <Image
                          src= {imagenProduct1}
                          alt="teclado2"
                          width={350}
                          height={250}
                          className='card-img-top'
                        />
                        <span className="card-body">
                            <h4 className="title mt-4">Diseño Grafíco</h4>
                            <p className="name">Quieres que tus diseños mejoren, es la hora de cambiarte a un teclado custom</p>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 text-dark">
                        <Image
                          src= {card}
                          alt="teclado2"
                          width={350}
                          height={250}
                          className='card-img-top'
                        />
                        <span className="card-body">
                            <h4 className="title mt-4">Desarrollo</h4>
                            <p className="name">Quieres programar de una manera más rápida, cambia tus switches</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="section bg-overlay">
        <div className="container">
            <div className="infos mb-4 mb-md-2">
                <div className="title">
                    <h6 className="subtitle font-weight-normal">Personaliza tu Teclado</h6>
                    <h5>Que nunca te falten los puntos ...</h5>
                    </div>
                    <div className="socials">
                        <div className="row justify-content-between">
                            <div className="col">
                            <a className="d-block subtitle"><FontAwesomeIcon icon={faPhoneVolume} style={{width: '3%', margin: 'auto', display: 'inline-block'}}/> +569 55667788</a>
                            <a className="d-block subtitle"><FontAwesomeIcon icon={faInbox} style={{width: '3%', margin: 'auto', display: 'inline-block'}}/> keyboardsSystemCustom@gmail.com</a>
                            </div>
                            <div className="col">
                                <h6 className="subtitle font-weight-normal mb-1">Redes Sociales</h6>
                                <div className="social-links">
                                    <a href="#" className="link pr-1"><FontAwesomeIcon icon={faFacebook} style={{width: '5%', margin: 'auto', display: 'inline-block'}}/></a>
                                    <a href="#" className="link pr-1"><FontAwesomeIcon icon={faTiktok} style={{width: '5%', margin: 'auto', display: 'inline-block'}}/></a>
                                    <a href="#" className="link pr-1"><FontAwesomeIcon icon={faInstagram} style={{width: '5%', margin: 'auto', display: 'inline-block'}}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
      </>
  );
}

