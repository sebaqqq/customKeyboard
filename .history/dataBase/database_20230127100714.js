export const getServerSideProps = async () => {
    const url = `${process.env.API_URL}/venta-keyboards/`
    const respuesta = await fetch(url)
    const keyboards = await respuesta.json()
    
    return {
        props: {
            keyboards
        }
    }