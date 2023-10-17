
import React from 'react';
import '../stylesheets/CustomNav/customNav.scss'; // Importa el archivo de estilos CSS si es necesario

const CustomNav = () => {
  return (
    <div className="navbar">
        <h1><a href='/'>SPA</a></h1>
      <ul>
        <a href="/"><li>Indice</li></a>
        <a href="/procesos"><li>Procesos Activos</li></a>
      </ul>
    </div>
  );
};

export default CustomNav;
