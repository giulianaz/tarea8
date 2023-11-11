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
import { useLocation } from 'react-router-dom';

const ProcesosEsp = () => {
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
    const location = useLocation();  // Utiliza useLocation para obtener la ubicación actual
    const resultados = location.state?.resultados || [];  // Accede a location.state

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
                {resultados.map((item, index) => (
                    <React.Fragment key={index}>
                    <tr className='segundaColumna'>
                        <td className='primeraFila2'><FontAwesomeIcon icon={faCaretRight} /></td>
                        <td>{item.sigla}</td>
                        <td>{item.nombre}</td>
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
                        <td><a href={item.enlace}>{item.profesor}</a></td>
                        <td>San Joaquin</td>
                        <td>3</td>
                        <td className='filita'><a className='boton' href={item.enlace}>Ver vacantes</a></td>
                    </tr>
                    </React.Fragment>
                ))}
            </table>
        </div>
    )
  
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
  
  export default ProcesosEsp;