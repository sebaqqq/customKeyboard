//next
import Image from 'next/image';

//Components
import Layout from '../components/Layout';

const About = () => {
    return (
        <>
            <Layout
                pagina= "Nosotros"
            >
                <section className="section" id="testmonial">
                    <div className="container">
                        <h6 className="xs-font mb-0">¿Quien Somos?</h6>
                        <h3 className="section-title">Ingenieros & Emprendedores</h3>
                        {/* hay que centrar la imagen de la foto grupal */}
                        <Image
                            src= {'/../public/groupPerson.jpg'}    
                            alt="grupo"
                            width={150}
                            height={350}
                            className='card-img-top'
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
            </Layout>
        </>
    );
}

export default About;