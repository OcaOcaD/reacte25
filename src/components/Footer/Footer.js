import React from 'react';
import './Footer.css';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const footer = props => (
    <div className="footer">
        <div className="footer__text">
            <label className="footer__address">Direccion - Calle Reforma 1714, Ladrón de Guevara, Ladron De Guevara, 44650 Guadalajara, Jal.</label>
            <label className="footer__email">Email - estancia25@gmail.om</label>
            <label className="footer__phones">Teléfono - 01 33 3615 2273</label>
        </div>
        <div className="footer__sn">
            <div className="footer__sn-app"><FontAwesomeIcon icon={faInstagram} size="2x"/></div>
            <div className="footer__sn-app"><FontAwesomeIcon icon={faFacebook} size="2x"/></div>
            <div className="footer__sn-app"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></div>
        </div>
    </div>
)
export default footer;