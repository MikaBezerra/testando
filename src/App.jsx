import React from 'react';
import './App.css';
import AreaUm from './componentes/areaUm/area_um';
import AreaDois from './componentes/areaDois/area_dois';
import AreaTres from './componentes/areaTres/area_tres';
import Botao from './componentes/botao/botao';

const App = () => {
  const scrollToArea = (areaId) => {
    const element = document.getElementById(areaId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVolteAoTopoClick = () => {
    scrollToArea('area-um');
  };

  return (
    <div className="app">
      <AreaUm scrollToArea={scrollToArea} />
      <AreaDois scrollToArea={scrollToArea} />
      <AreaTres />
      <footer className="footer">
        <div className="footer-left">
          <p>Obrigado por ter nos visitado</p>
        </div>
        <div className="footer-right">
          <Botao text="Volte ao topo" handleClick={handleVolteAoTopoClick} />
        </div>
      </footer>
    </div>
  );
};

export default App;

