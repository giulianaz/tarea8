import React from 'react'
import CustomNav from '../components/customNav'
import Carta from '../components/carta'
import '../stylesheets/procesos.scss'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


const ContenidoTabla = (
  <div className='contenidoTabla'>
    <div className='busqueda'>
      <input type="text" placeholder="Buscar por profesor" />
      <a href='/marti'> Buscar</a>
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
      <td className='primeraFila2' ><FontAwesomeIcon icon={faCaretRight} /></td>
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
        <td><a>Jose Luis Marti Lara</a></td>
        <td>San Joaquin</td>
        <td>3</td>
        <td className='filita'><a className='boton' href='/vacantes'>Ver vacantes</a></td>
    </tr>
  </table>
</div>
);

export const Marti = () => {
    return (
        <div className='page'>
          <div>
            <CustomNav />
          </div>
          <div className='container'>
            <Carta titulo="Listado de Asignaturas" contenido={ContenidoTabla}/>
            <Footer/>
          </div>
        </div>
      )
}

export default Marti
