import React from 'react';
import styleClass from './App.module.scss';
import idVisualGiRosaWhite from './img/ident-visual/giRosa/giRosaLogoWhite.png';
import idVisualGiRosaBlack from './img/ident-visual/giRosa/giRosaLogoBlack.png';
import idVisualGiRosaName from './img/ident-visual/giRosa/giRosaNameWhite.png';
import idVisualGiRosaName2 from './img/ident-visual/giRosa/giRosaNameBlack.png';



import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelopeOpenText, faHome, faHouseDamage, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';


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
            <label id="linkedin"><a href="https://www.linkedin.com/in/juliana-saori-031095162/"><FontAwesomeIcon icon={faLinkedin} /><span className="nameLinkedin">Linkedin</span></a></label>
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

        <div className="Layouts">
          <div className="imgLayouts">
            <img className="principalName" src={idVisualGiRosaName} />

            <div className="logos">
              <img src={idVisualGiRosaWhite} />
              <img src={idVisualGiRosaBlack} />
            </div>

          </div>
          <div className="titleLayout">Identidade Visual</div>





          <img />


        </div>
      </body>

    </div>
  );
}

export default App;