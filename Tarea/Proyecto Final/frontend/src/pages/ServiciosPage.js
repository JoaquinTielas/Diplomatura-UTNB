import '../styles/ServiciosPage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ServicioItem from '../components/servicios/servicios';

const ServiciosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const cargarServicios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api');
            setServicios(response.data);
            setLoading(false);
        };

        cargarServicios();
    }, []);

    return (
        <section>
            <h2>Servicios</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    servicios.map(item => <ServicioItem key={item.ID} title={item.Servicio} description={item.Descripcion} imagen={item.imagen}/>)
                )
            }

        </section>
    )
};

/*<main>
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
);*/

export default ServiciosPage;