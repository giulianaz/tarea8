
import React from 'react';
import '../stylesheets/Footer/footer.scss'; // Importa el archivo de estilos CSS si es necesario

const Footer = () => {
  return (
    <div className="footer">
        <div className='link'>
            <a href='https://www.inf.utfsm.cl/'>DEPARTAMENTO DE INFORMÁTICA</a>
            <a href='https://www.usm.cl/'>UTFSM</a>
        </div>
        <div>
            <p>© 2023 DI-UTFSM</p>
        </div>
    </div>
  );
};

export default Footer;
