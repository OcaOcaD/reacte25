import React from 'react';
import './Toolbar.css';
import Logo from '../../img/Basic/logotipo_blanco.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';

const toolbar = props => (
    <header className="toolbar">
        <div className="drawertogglebutton__container">
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__background"></div>
        <nav className="toolbar__navigation">
            <div className="toolbar__items toolbar__left">
                <ul className="toolbar__items__list" >
                    <li><a className="toolbar__tab" href="/">ESTANCIA 25</a></li>
                    <li><a className="toolbar__tab" href="/">PROYECTOS PÚBLICOS</a></li>
                </ul>
            </div>
            <div className="toolbar__logo">
                
                <a href="/"><img src={Logo} alt="logo"></img></a>
            </div>
            <div className="toolbar__items toolbar__right">
                <ul className="toolbar__items__list" >
                    <li><a className="toolbar__tab" href="/">PROYECTOS PRIVADOS</a></li>
                    <li><a className="toolbar__tab" href="/">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;