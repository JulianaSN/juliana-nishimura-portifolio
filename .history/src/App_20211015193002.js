import React from 'react';
import './App.module.scss';
import { Carousel } from 'bootstrap';
import ContainerClient from './components/ContainerClients';
import idVisualGiRosaName from './img/ident-visual/giRosa/giRosaNameWhite.png';
import cadernoGiRosa from './img/ident-visual/giRosa/05J_08.jpg';
import logoArtByNog from './img/ident-visual/artbyNog/artbyNogCartao.jpg';
import idVisualNishi from './img/ident-visual/nishiDesign/nishiDesignNameWhite.png';
import cadernoNishiDesign from './img/ident-visual/nishiDesign/nishiDesignCaderno.jpg';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelopeOpenText, faHome, faHouseDamage, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { CarouselItem } from 'react-bootstrap';


function App() {

  function navigateJobPage() {

    $('html,body').animate({
      scrollTop: $("#jobs").offset().top
    },
      'slow');



  }

  function navigateHome() {
    $('html,body').animate({
      scrollTop: $(".App").offset().top
    },
      'slow');
  }

  return (
    <div className="App">
      <header className="Appheader">
        <div className="menuInfo">
          <div className="labelInfo">
            <label className="home" onClick={navigateHome}><FontAwesomeIcon icon={faHome} /></label>
            <label id="linkedin">
              <a href="https://www.linkedin.com/in/juliana-saori-031095162/">
                <FontAwesomeIcon icon={faLinkedin} /><span className="nameLinkedin">Linkedin</span></a></label>
            <label id="behance"><a href="https://www.behance.net/julianasaori"><FontAwesomeIcon icon={faBehance} /><span className="nameBehance">hance</span></a></label>
            <label id="email"><a><FontAwesomeIcon icon={faEnvelope} /><span className="nameEmail">Email</span></a></label>
            <label id="instagram"><a href="https://www.instagram.com/jusanishimura/"><FontAwesomeIcon icon={faInstagram} /><span className="nameInstagram">Instagram</span></a></label>
          </div>

        </div >
        <div className="contentPresentation">
          <div className="divImage">
            <div className="elemento1"></div>
            <div className="elemento2"></div>
            <div className="elemento3"></div>
            <div className="elemento4"></div>
            <div className="elemento5"></div>
            <div className="elemento6"></div>

            <img />
          </div>
          <div className="presentation">
            <label className="brasika">Juliana Saori<br />Nishimura</label>
            <p className="comfortaa">Web Designer e Designer Grafica em formação</p>
            <div className="divButtons">
              <button className="buttonPrincipal" onClick={navigateJobPage} ><a href="index.js" download="nomeAleatorio"></a>Conheça o meu trabalho</button>
              <div className="buttonShadow"></div>

            </div>


          </div>
        </div>

      </header>


      <body className="AppBody">

        <div id="jobs" className="workCards">
          <div className="animationCards">
            <div className="imgWorkCards"></div>
            <div className="titles">Layouts</div>
          </div>
          <div className="animationCards">
            <div className="imgWorkCards"></div>
            <div className="titles">Identidade Visual</div>
          </div>
          <div className="animationCards">
            <div className="imgWorkCards"></div>
            <div className="titles">Animação</div>
          </div>
          <div className="animationCards">
            <div className="imgWorkCards"></div>
            <div className="titles">Ilustração</div>

          </div>

        </div>


        <ContainerClient
          title="Layouts"
          imagem1={cadernoGiRosa}
          descricaoCliente1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem2={logoArtByNog}
          descricaoCliente2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem3={cadernoNishiDesign}
          descricaoCliente3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />


        <ContainerClient
          title="Identidade Visual"
          imagem1={cadernoGiRosa}
          descricaoCliente1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem2={logoArtByNog}
          descricaoCliente2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem3={cadernoNishiDesign}
          descricaoCliente3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ContainerClient
          title="Animação"
          imagem1={cadernoGiRosa}
          descricaoCliente1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem2={logoArtByNog}
          descricaoCliente2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem3={cadernoNishiDesign}
          descricaoCliente3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ContainerClient
          title="Ilustração"
          imagem1={cadernoGiRosa}
          descricaoCliente1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem2={logoArtByNog}
          descricaoCliente2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imagem3={cadernoNishiDesign}
          descricaoCliente3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        






      </body>

    </div>
  );
}

export default App;
