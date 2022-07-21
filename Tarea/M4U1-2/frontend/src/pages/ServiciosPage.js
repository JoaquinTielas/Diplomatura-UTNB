import '../styles/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main>
                <div className="Titulo">
                    <p>Que quieres arreglar hoy?</p>
                </div>
                <div className="Productos">
                    <img src="Imagenes/Zapatos de Hombre.jpg" alt=""></img>
                    <p><a href="Servicios.html" target="_blank">Zapatos de Hombre</a></p>
                </div>
                <div className="Productos">
                    <img src="Imagenes/Mochila.jpg" alt=""></img>
                    <p><a href="Servicios.html" target="_blank">Mochilas</a></p>
                </div>
                <div className="Productos">
                    <img src="Imagenes/valijas.jpg" alt=""></img>
                    <p><a href="Servicios.html" target="_blank">Valijas</a></p>
                </div>
                <div className="Productos">
                    <img src="Imagenes/Zapatos de Mujer.jpg" alt=""></img>
                    <p><a href="Servicios.html" target="_blank">Zapatos de Mujer</a></p>
                </div>
                <div className="Productos">
                    <img src="Imagenes/Carteras.jpg" alt=""></img>
                    <p><a href="Servicios.html" target="_blank">Carteras</a></p>
                </div>
                <div className="Productos">
                    <img src="Imagenes/Cinturones.jpg" alt=""></img>
                    <p><a href="Servicios.html" target="_blank">Cinturones</a></p>
                </div>
        </main>
    );

}
export default ServiciosPage;