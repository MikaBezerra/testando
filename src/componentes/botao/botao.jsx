import React from 'react';
import './botao.css';

const Botao = ({ text, handleClick }) => {
  return (
    <button className="botao" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Botao;
