import '../styles/PresupuestoPage.css'

const PresupuestoPage = (props) => {
    return (
        <main>
            <div>
                <div className="Titulo">
                    <p>Presupuestos y Consultas</p>
                </div>

                <form action="">
                    <h2>Presupuestos personalizados</h2>
                    <input type="text" placeholder="Nombre" className="input"></input>
                    <input type="text" placeholder="Apellido" className="input"></input>
                    <input type="text" placeholder="Telefono" className="input"></input>
                    <input type="email" placeholder="Correo Electronico" className="input"></input>

                    <select name="" id="select">
                        <option disabled selected>Seleccione que desea reparar</option>
                        <option value="">Zapatos de hombre</option>
                        <option value="">Zapatos de mujer</option>
                        <option value="">Zapatillas</option>
                        <option value="">Carteras</option>
                        <option value="">Valijas</option>
                        <option value="">Mochilas</option>
                        <option value="">Cinturones</option>
                    </select>

                    <textarea name="" id="" cols="30" rows="2" placeholder="Describa la reparacion a realizar..."></textarea>

                    <h3>Adjuntanos todas las fotos que creas necesarias :</h3>
                    <input type="file"></input>

                    <input type="submit" value="Enviar" class="Boton"></input>

                </form>
            </div>
        </main>
    );
}
export default PresupuestoPage;