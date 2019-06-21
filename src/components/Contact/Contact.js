import React from 'react'
import './Contact.css'
import GoogleMap from '../GoogleMap/GoogleMap'
import FormAndInputs from '../FormsAndInputs/FormsAndInputs'

const contact = props => (
    <div className="contact">
        <h1 className="contact__title">COMUNÍCATE CON NOSOTROS</h1>
        <div className="contact__display">
            <div className="contact__map">
                <GoogleMap/>
            </div>
            <div className="contact__info">
                <strong><h3>DIRECCION</h3></strong>
                <p>Calle Reforma 1714, Ladrón de Guevara,</p>
                <p> Ladron De Guevara, 44650 Guadalajara, Jal.</p>
                <strong><h3>EMAIL</h3></strong>
                <p> contacto@estancia25.com</p>
                <strong><h3>TELÉFONOS</h3></strong>
                <p> 33 3615 2273</p>
           
            </div>
        </div>
        <div className="contact__form">
            <FormAndInputs/>
        </div>
    </div>
);
export default contact;