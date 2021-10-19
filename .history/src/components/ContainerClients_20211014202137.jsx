import React from 'react';
import { Carousel } from 'bootstrap';
import '../App.module.scss';


function ContainerClient(props) {
    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>
                <div className="containerIdVisual">
                    <Carousel>
                        <Carousel.Item>
                            <img className="principalName" src={props.imagem} />
                            <label className="descricaoCliente">
                                {props.descricaoCliente}
                            </label>
                          
                        </Carousel.Item>

                    </Carousel>


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