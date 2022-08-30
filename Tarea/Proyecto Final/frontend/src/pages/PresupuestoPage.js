import '../styles/PresupuestoPage.css'

import React, { useState } from 'react';
import axios from 'axios';

const PresupuestoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        telefono: '',
        mail: '',
        opcion: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleCharge = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefaut();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/Presupuestos', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }


    return (
        <main>
            <div>
                <div className="Titulo">
                    <p>Presupuestos y Consultas</p>
                </div>

                <form action="http://localhost:3000/api/Presupuestos" method='post' onSubmit={handleSubmit}>
                    <h2>Presupuestos personalizados</h2>
                    <input type="text" placeholder="Nombre" className="input" name='nombre' value={formData.nombre} onChange={handleCharge}></input>
                    <input type="text" placeholder="Apellido" className="input" name='apellido' value={formData.apellido} onChange={handleCharge}></input>
                    <input type="text" placeholder="Telefono" className="input" name='telefono' value={formData.telefono} onChange={handleCharge}></input>
                    <input type="email" placeholder="Correo Electronico" className="input" name='mail' value={formData.mail} onChange={handleCharge}></input>

                    <select name="opcion" id="select" value={formData.opcion} onChange={handleCharge}>
                        <option disabled selected>Seleccione que desea reparar</option>
                        <option value="Zapatos de hombre">Zapatos de hombre</option>
                        <option value="Zapatos de mujer">Zapatos de mujer</option>
                        <option value="Zapatillas">Zapatillas</option>
                        <option value="Carteras">Carteras</option>
                        <option value="Valijas">Valijas</option>
                        <option value="Mochilas">Mochilas</option>
                        <option value="Cinturones">Cinturones</option>
                    </select>

                    <textarea name="mensaje" id="" cols="30" rows="2" placeholder="Describa la reparacion a realizar..." value={formData.mensaje} onChange={handleCharge}></textarea>

                    <h3>Adjuntanos todas las fotos que creas necesarias :</h3>
                    <input type="file"></input>

                    <input type="submit" value="Enviar" class="Boton"></input>

                </form>


            </div>
        </main>
    );
}
export default PresupuestoPage;