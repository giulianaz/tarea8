import CustomNav from '../components/customNav';
import React, { useState } from 'react';
import Carta from '../components/carta';
import '../stylesheets/procesos.scss';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mockupData from '../components/data';

export const Procesos = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const filtrarDatos = () => {
    return mockupData.filter(item =>
      item.profesor.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const handleBuscarClick = () => {
    const resultados = filtrarDatos();
    navigate('/procesosesp', { state: { resultados } });
  };


  const ContenidoTabla = (
    <div className='contenidoTabla'>
      <div className='busqueda'>
        <input
          type="text"
          placeholder="Buscar por profesor"
          value={busqueda}
          onChange={handleBusquedaChange}
        />
        <button onClick={handleBuscarClick}>Buscar</button>
      </div>
      <table>
    <tr className='primeraColumna'>
        <td className='primeraFila'></td>
        <td><b>Sigla</b></td>
        <td><b>Nombre</b></td>
        <td></td>
        <td></td>
        <td className='filita'><b>Opciones</b></td>
    </tr>
    <tr className='segundaColumna'>
        <td className='primeraFila2'><FontAwesomeIcon icon={faCaretRight} /></td>
        <td>INF-225</td>
        <td>Ingeniería de Software</td>
    </tr>
    <tr className='terceraColumna'>
        <td className='primeraFila'><b>PARALELO</b></td>
        <td></td>
        <td><b>PROFESOR</b></td>
        <td><b>CAMPUS</b></td>
        <td><b>VACANTES</b></td>
        <td className='filita'><b>OPCIONES</b></td>
    </tr>
    <tr className='cuartaColumna'>
        <td className='primeraFila'>200</td>
        <td><img src='https://spa.inf.utfsm.cl/img/userM.png'></img></td>
        <td><a href='/vacantesisw'>Ricardo Antonio Salas Letelier</a></td>
        <td>San Joaquin</td>
        <td>3</td>
        <td className='filita'><a className='boton' href='/vacantesisw'>Ver vacantes</a></td>
    </tr>
    <tr className='segundaColumna'>
      <td className='primeraFila2'><FontAwesomeIcon icon={faCaretRight} /></td>
        <td>INF-239</td>
        <td>Bases de Datos</td>
    </tr>
    <tr className='terceraColumna'>
        <td className='primeraFila'><b>PARALELO</b></td>
        <td></td>
        <td><b>PROFESOR</b></td>
        <td><b>CAMPUS</b></td>
        <td><b>VACANTES</b></td>
        <td className='filita'><b>OPCIONES</b></td>
    </tr>
    <tr className='cuartaColumna'>
        <td className='primeraFila'>200</td>
        <td><img src='https://spa.inf.utfsm.cl/img/userM.png'></img></td>
        <td><a href='/vacantesbd'>Rodrigo Eduardo Olavarria Alvarez</a></td>
        <td>San Joaquin</td>
        <td>3</td>
        <td className='filita'><a className='boton' href='/vacantesbd'>Ver vacantes</a></td>
    </tr>
    <tr className='segundaColumna'>
      <td className='primeraFila2'> <FontAwesomeIcon icon={faCaretRight} /></td>
        <td>INF-253</td>
        <td>Lenguajes de Programación</td>
    </tr>
    <tr className='terceraColumna'>
        <td className='primeraFila'><b>PARALELO</b></td>
        <td></td>
        <td><b>PROFESOR</b></td>
        <td><b>CAMPUS</b></td>
        <td><b>VACANTES</b></td>
        <td className='filita'><b>OPCIONES</b></td>
    </tr>
    <tr className='cuartaColumna'>
        <td className='primeraFila'>200</td>
        <td><img src='https://spa.inf.utfsm.cl/img/userM.png'></img></td>
        <td><a href='/vacantes'>Jose Luis Marti Lara</a></td>
        <td>San Joaquin</td>
        <td>3</td>
        <td className='filita'><a className='boton' href='/vacantes'>Ver vacantes</a></td>
    </tr>
  </table>
    </div>
  );

  return (
    <div className='page'>
      <div>
        <CustomNav />
      </div>
      <div className='container'>
        <Carta titulo="Listado de Asignaturas" contenido={ContenidoTabla} />
        <Footer />
      </div>
    </div>
  );
};

export default Procesos;