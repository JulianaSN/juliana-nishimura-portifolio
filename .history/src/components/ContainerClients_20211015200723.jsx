import { React, useState } from 'react';
import '../App.module.scss';
import Carousel from 'react-bootstrap/Carousel'


function ContainerClient(props) {

    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>
                <Carousel >



                    <Carousel.Item interval={100000}>
                        {/* <div className="containerIdVisual"> */}

                        <img className="principalName" src={props.imagem1} />
                        <Carousel.Caption>
                        <button className="buttonNormal">Ver mais</button>
                        </Carousel.Caption>
                        {/* </div> */}

                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        {/* <div className="containerIdVisual"> */}
                        <img className="principalName" src={props.imagem2} />

                        <Carousel.Caption>

                                <button className="buttonNormal">Ver mais</button>


                            {/* <label className="descricaoCliente">
                                {props.descricaoCliente2}
                            </label> */}

                        </Carousel.Caption>
                        {/* </div> */}
                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <img className="principalName" src={props.imagem3} />
                        <Carousel.Caption>
                        <button className="buttonNormal">Ver mais</button>

                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <img className="principalName" src={props.imagem4} />
                        <Carousel.Caption>
                        <button className="buttonNormal">Ver mais</button>

                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>

            </div>
        </div>


    );
}
export default ContainerClient;