
import React from 'react';
import '../stylesheets/CustomNav/customNav.scss'; // Importa el archivo de estilos CSS si es necesario
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faList } from '@fortawesome/free-solid-svg-icons';

const CustomNav = () => {
  return (
    <div className="navbar">
        <h1><a href='/'>SPA</a></h1>
      <ul>
        <a href="/"><li><FontAwesomeIcon icon={faChartSimple} flip="horizontal" />  Indice</li></a>
        <a href="/procesos"><li><FontAwesomeIcon icon={faList} /> Procesos Activos</li></a>
      </ul>
    </div>
  );
};

export default CustomNav;
