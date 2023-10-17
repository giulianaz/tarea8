
import React from 'react';
import '../stylesheets/Card/card.scss'

const Card = () => {
  return (
    <div className="containerCard">
        <div className='containerGeneral'>
            <div className='titulo'>
                <h2>Noticias</h2>
            </div>
            <div className='card'>
                <div className='containerSubtitulo'>
                    <div className='subtitulo'>
                            <h3>Inicio proceso de postulación 2023-2 - INFORMÁTICA</h3>
                    </div>
                    <div className='contenido'>
                        <p>Estimad@s:</p>
                        <p>Se les informa que para efecto de las ayudantías del 2023-2, las fechas que se manejarán son:</p>
                        <table>
                            <tr>
                                <td></td>
                                <td><b>Fecha Inicio</b></td>
                                <td><b>Fecha Término</b></td>
                            </tr>
                            <tr>
                                <td><b>Postulaciones</b></td>
                                <td>18-07-2023</td>
                                <td>25-07-2023</td>
                            </tr>
                            <tr>
                                <td><b>Selección por parte de profesores</b></td>
                                <td>26-07-2023</td>
                                <td>28-07-2023</td>
                            </tr>
                            <tr>
                                <td><b>Postulaciones a vacantes no cubiertas en el 1er llamado</b></td>
                                <td>31-07-2023</td>
                                <td>04-08-2023</td>
                            </tr>
                        </table>
                        <p>Cualquier duda enviarla a <a href="mailto:spa@inf.utfsm.cl">spa@inf.utfsm.cl</a>.</p><br/>
                        <p>Atte.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
