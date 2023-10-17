
import React from 'react';
import '../stylesheets/Card/carta.scss'

const Carta = (props) => {
  return (
    <div className="containerCarta">
      <div className='containerGeneral'>
        <div className='titulo'>
            <h2>{props.titulo}</h2>
        </div>
        <div className='card'>
            <p>{props.contenido}</p>
        </div>
      </div>
    </div>
  );
};

export default Carta;
