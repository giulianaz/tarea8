import React from 'react'
import CustomNav from '../components/customNav'
import Carta from '../components/carta'
import '../stylesheets/procesos.scss'
import Footer from '../components/footer'

const svgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" fill="#ff0000" />
  </svg>
`;


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
        <td className='primeraFila2' dangerouslySetInnerHTML={{ __html: svgIcon }}></td>
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
        <td><a>Ricardo Antonio Salas Letelier</a></td>
        <td>San Joaquin</td>
        <td>3</td>
        <td className='filita'><a className='boton' href='/vacantes'>Ver vacantes</a></td>
    </tr>
    <tr className='segundaColumna'>
      <td className='primeraFila2' dangerouslySetInnerHTML={{ __html: svgIcon }}></td>
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
        <td><a>Rodrigo Eduardo Olavarria Alvarez</a></td>
        <td>San Joaquin</td>
        <td>3</td>
        <td className='filita'><a className='boton' href='/vacantes'>Ver vacantes</a></td>
    </tr>
    <tr className='segundaColumna'>
      <td className='primeraFila2' dangerouslySetInnerHTML={{ __html: svgIcon }}></td>
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


export const Procesos = () => {
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

export default Procesos
