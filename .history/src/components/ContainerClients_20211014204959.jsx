import React from 'react';
import '../App.module.scss';
import Carousel from 'react-bootstrap/Carousel'


function ContainerClient(props) {
    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>
                <div className="containerIdVisual">
                    <Carousel fade>
                        <Carousel.Item>
                            <img className="principalName" src={props.imagem} />
                            <Carousel.Caption>
                                <label className="descricaoCliente">
                                    {props.descricaoCliente}
                                </label>
                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="principalName" src={props.imagem} />
                            <Carousel.Caption>
                                <label className="descricaoCliente">
                                    {props.descricaoCliente}
                                </label>
                            </Carousel.Caption>

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