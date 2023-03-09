//next
import Image from 'next/image';

//Components
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

export default function aboutPage(params) {
    return (
        <>
            <section className="section" id="testmonial">
                <div className="container">
                    <h6 className="xs-font mb-0">¿Quien Somos?</h6>
                    <h3 className="section-title">Ingenieros & Emprendedores</h3>
                    {/* hay que centrar la imagen de la foto grupal */}
                    <Image
                        src= {'/../public/groupPerson.jpg'}    
                        alt="grupo"
                        width={350}
                        height={250}
                        // className='card-img-top'
                    />  
                    <div id="owl-testmonial" className="owl-carousel owl-theme mt-4">
                        <div className="item">
                            <div className="textmonial-item">
                                <div className="des">
                                    <h5 className="ti-quote-left font-weight-bold"></h5>
                                    <p>Somos un grupo de Ingenieros Informáticos, que tomaron la decisión de vender accesorios para tu teclado. Somos de la clase de personas que le gusta que su teclado suene de una manera sensacional y que las teclas estén personalizadas al máximo</p>
                                    <h5 className="ti-quote-left text-right font-weight-bold"></h5>
                                    <div className="line"></div>
                                    <h6 className="xs-font">Grupo de Ingenieros / Emprendedores</h6>
                                    <h6 className="name">Thomas Constanzo</h6>
                                    <h6 className="name">Samuel Gajardo</h6>
                                    <h6 className="name">Sebastian Quintana</h6>
                                    <h6 className="name">Benjamin Garrido</h6>
                                    <h6 className="name">Sebastian Norero</h6>
                                </div>
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