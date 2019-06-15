import React from 'react';
import './SideDrawer.css'
const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if ( props.show ){
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">ESTANCIA 25</a></li>
                <li><a href="/">PROYECTOS PÚBLICOS</ a></li>
                <li><a href="/">PROYECTOS PRIVADOS</a></li>
                <li><a href="/">CONTACTO</a></li>
            </ul>
        </nav>
    )
};
export default sideDrawer;