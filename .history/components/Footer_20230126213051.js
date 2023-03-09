

const Footer = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer