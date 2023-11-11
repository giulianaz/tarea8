import React from 'react'
import CustomNav from '../components/customNav'
import Carta from '../components/carta'
import '../stylesheets/vacantes.scss'
import Footer from '../components/footer'
import '../stylesheets/page/modal.scss'
import { Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const ContenidoTabla = (
    <div className='contenidoVacantes'>
      <table>
      <tr className='primeraColumna'>
          <td className='primeraFila'>ESTADO</td>
          <td>INFORMACION</td>
          <td className='tareas'>TAREAS</td>
          <td className='extra-salario'>EXTRA</td>
          <td className='filita'>OPCIONES</td>
      </tr>
      <tr className='segundaColumna'>
        <td className='primeraFila seleccion'> <p>Seleccion completa (16/16)</p></td>
        <td>Contacto: 0 horas.<br/>
            Corrección: 7 horas.<br/>
            Laboratorio: 8 horas.<br/><br/>
            Total: 15 horas.
        </td>
        <td className='tareas'>
            <ul>
                <li>Apoyar durante evaluaciones.</li>
                <li>Ayudantias de Laboratorio.</li>
                <li>Creacion de Laboratorios.</li>
            </ul>
        </td>
        <td>Salario: $80.000 mensual.</td>
        <td className='filita'><button
        type="button"
        className="boton"
        data-bs-toggle="modal"
        data-bs-target="#miModal"
      >
        + Agregar Postulación
      </button></td>
      </tr>
    </table>
     {/* Modal */}
     <div className="modal fade modal-sm mi-modal" id="miModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Postular</h5>
              <button type="button" className="botonEquis" data-bs-dismiss="modal" aria-label="Close">x</button>
            </div>
            <div className="modal-body">
                    <div className='izquierda'>
                        <p>Postulante:</p>
                        <p>Motivacion:</p>
                        <p>Comentario:</p>
                    </div>
                    <div className='derecha'>
                    <p>Lilly Guevara</p>
                    <select id="cars" name="cars">
                        <option value="" disabled selected>Seleccione Motivación</option>
                        <option>Quiero Aprender</option>
                        <option>Me gusta enseñar</option>
                        <option>Retomar rol de ayudante</option>
                        <option>Ayuda financiera</option>
                        <option>Otros</option>
                    </select>
                    <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                    </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="botonCerrar" data-bs-dismiss="modal">CANCELAR</button>
              <button type="button" className="botonAceptar" data-bs-dismiss="modal">ACEPTAR</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );

export const VacantesBD = () => {
  return (
    <div className='page'>
      <div>
        <CustomNav />
      </div>
      <div className='container'>
        <Carta titulo="Vacantes INF-239 - Bases de Datos" contenido={ContenidoTabla}/>
        <Footer/>
      </div>
    </div>
  )
}

export default VacantesBD
