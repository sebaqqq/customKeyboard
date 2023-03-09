//next
import Head from "next/head";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>KSC - {pagina}</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta charSet="utf-8" />
                <meta name="description" content="keyboard System Custom" />
                <meta name="keywords" content="keyboard System Custom" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> 
            </Head>   
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;