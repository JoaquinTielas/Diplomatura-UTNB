import '../styles/ProductoPage.css'

const ProductosPage = (props) => {
    return (
        <main>
                <div className="Titulo">
                    <p>Los mejores productos para tus zapatos</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Pomadas.jpg" alt=""></img>
                    <h3>Pomadas</h3>
                    <p>Las mejores pomadas para mantener el color y el brillo en tus zapatos.</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Plantillas.jpg" alt=""></img>
                    <h3>Plantillas</h3>
                    <p>Plantillas con estilos y plantillas ortopedicas con los mejores disenos</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Cepillos.jpg" alt=""></img>
                    <h3>Cepillos</h3>
                    <p>Lustra tus zapatos como un profesional</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Cordones.jpg" alt=""></img>
                    <h3>Cordones</h3>
                    <p>Cordones de todo tipo y para todo tipo de calzados</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Medias.jpg" alt=""></img>
                    <h3>Medias</h3>
                    <p>Medias de para todos los gustos</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Cinturones.jpg" alt=""></img>
                    <h3>Cinturones</h3>
                    <p>Cinturones elegante-sport y de vestir de la mejor calidad</p>
                </div>

                <div className="Tarjetas">
                    <img src="Imagenes/Aerosoles.jpg" alt=""></img>
                    <h3>Aerosoles</h3>
                    <p>Protectores en aerosol para zapatos de color y blanco y negro.</p>
                </div>
        </main>
    );
}
export default ProductosPage;