import React from 'react';
import './area_um.css';
import Botao from '../botao/botao';

const AreaUm = ({ scrollToArea }) => {
  const handleParte2Click = () => {
    scrollToArea('area-dois');
  };

  const handleParte3Click = () => {
    scrollToArea('area-tres');
  };

  return (
    <div className="area-um" id="area-um">
      <header>
        <h1>Mikaell</h1>
        <div className="buttons">
          <Botao text="Parte 2" handleClick={handleParte2Click} />
          <Botao text="Parte 3" handleClick={handleParte3Click} />
        </div>
      </header>
      <div className="content">
        <h2>Bem-vindo ao site do Mikaell</h2>
      </div>
    </div>
  );
};

export default AreaUm;

