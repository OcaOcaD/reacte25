import React from 'react';
import './Toolbar.css';
const toolbar = props => (
    <header className="toolbar">
        <div className="toolbar__background"></div>
        <nav className="toolbar__navigation">
            <div className="toolbar__items toolbar__left">
                <ul className="toolbar__items__list" >
                    <li><a className="toolbar__tab" href="/">SOME</a></li>
                    <li><a className="toolbar__tab" href="/">SOME</a></li>
                </ul>
            </div>
            <div className="toolbar__logo"><a href="/">ASD LOGO</a></div>
            <div className="toolbar__items toolbar__right">
                <ul className="toolbar__items__list" >
                    <li><a className="toolbar__tab" href="/">SOME</a></li>
                    <li><a className="toolbar__tab" href="/">SOME</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;