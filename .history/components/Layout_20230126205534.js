import Head from "next/head";

const Layout = ({children}) => {
    return (
        <div>
            <h1>Layout</h1>
            {children}
        </div>
    );
}

export default Layout;