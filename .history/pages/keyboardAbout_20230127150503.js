//next
import Image from 'next/image';

//Components
import Layout from '../components/Layout';

const keyboardAboutPage = () => {
    return (
        <>
            <Layout
                pagina= "Tipos de Teclado"
            >
                    <section className="section" id="blog">
                        <div className="container mb-3">
                            <h6 className="xs-font mb-0">No sabes cual es el tamaño de tu teclado</h6>
                            <h1 className="section-title mb-4">Tipos de teclado</h1>
                            <div className="blog-wrapper">
                                <div className="img-wrapper">
                                    <Image
                                        src= {'/../public/images/teclado100.jpg'}
                                        alt="teclado al 100%"
                                        width={450}
                                        height={150}
                                    />
                                    <div className="date-container">
                                        <h6 className="day">100</h6> 
                                    </div>
                                </div>
                                <div className="txt-wrapper">
                                    <h3 className="mt-3 mb-2">Teclado al 100%</h3>
                                    <p>El teclado al 100% cuenta con 110 teclas.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="blog">
                        <div className="container mb-3">
                            <div className="blog-wrapper">
                                <div className="img-wrapper">
                                    <Image
                                        src= {'/../public/images/tecladoTkl.jpg'}
                                        alt="teclado TKL"
                                        width={450}
                                        height={150}
                                    />
                                    <div className="date-container">
                                        <h6 className="day">TKL</h6> 
                                    </div>
                                </div>
                                <div className="txt-wrapper">
                                    <h3 className="mt-3 mb-2">Teclado TKL</h3>
                                    <p>Teclado TKl cuenta con 88 teclas.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="blog">
                        <div className="container mb-3">
                            <div className="blog-wrapper">
                                <div className="img-wrapper">
                                    <Image
                                        src= {'/../public/images/teclado75.jpg'}
                                        alt="teclado al 75%"
                                        width={450}
                                        height={150}
                                    />
                                    <div className="date-container">
                                        <h6 className="day">75</h6> 
                                    </div>
                                </div>
                                <div className="txt-wrapper">
                                    <h3 className="mt-3 mb-2">Tecaldo al 75%</h3>
                                    <p>Teclado al 75% cuenta con 70 teclas.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="blog">
                        <div className="container mb-3">
                            <div className="blog-wrapper">
                                <div className="img-wrapper">
                                    <Image
                                        src= {'/../public/images/teclado60.jpg'}
                                        alt="teclado al 60%"
                                        width={450}
                                        height={150}
                                    />
                                    <div className="date-container">
                                        <h6 className="day">60</h6> 
                                    </div>
                                </div>
                                <div className="txt-wrapper">
                                    <h3 className="mt-3 mb-2">Tecaldo al 60%</h3>
                                    <p>Teclado al 60% cuenta con 64 teclas.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </Layout>
        </>
    );
}

export default keyboardAboutPage;