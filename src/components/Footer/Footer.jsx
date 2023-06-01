import React from 'react';

function Footer() {
    return (
        <footer className=" py-3 navegador">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-muted">Copyright © 2023 
                        La Tienda del Basket. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled  text-md-right">
                        <li>
                            <a >Politica de Privacidad</a>
                        </li>
                        <li>
                            <a >Terminos de Uso</a>
                        </li>
                        <li>
                            <a >Contacto</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
    }

export default Footer;