import React from 'react';
import { Carousel } from 'bootstrap';
import '../App.module.scss';


function ContainerClient(props) {
    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>
                <div id="carouselExampleControls" className="containerIdVisual carousel slide " data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="principalName" src={props.imagem} />
                            <label className="descricaoCliente">
                                {props.descricaoCliente}
                            </label>
                        </div>
                        <div className="carousel-item ">
                            <img className="principalName" src={props.imagem} />
                            <label className="descricaoCliente">
                                {props.descricaoCliente}
                            </label>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>




                </div>

                {/* <div className="logos">
              <img src={idVisualGiRosaWhite} />
              <img src={idVisualGiRosaBlack} />
            </div> */}

            </div>





            <img />


        </div>
    );

}
export default ContainerClient;