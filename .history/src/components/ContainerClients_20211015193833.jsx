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
                            <label className="descricaoCliente">
                                {props.descricaoCliente1}
                            </label>
                        </Carousel.Caption>
                        {/* </div> */}

                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        {/* <div className="containerIdVisual"> */}
                        <img className="principalName" src={props.imagem2} />
                        <div className="divButtons">
                            <button className="buttonPrincipal">Ver mais</button>
                            <div className="buttonShadow"></div>

                        </div>
                        <Carousel.Caption>
                            <label className="descricaoCliente">
                                {props.descricaoCliente2}
                            </label>
                        </Carousel.Caption>
                        {/* </div> */}
                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <img className="principalName" src={props.imagem3} />
                        <Carousel.Caption>
                            <label className="descricaoCliente">
                                {props.descricaoCliente3}
                            </label>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item interval={100000}>
                        <img className="principalName" src={props.imagem4} />
                        <Carousel.Caption>
                            <label className="descricaoCliente">
                                {props.descricaoCliente4}
                            </label>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>

            </div>
        </div>


    );
}
export default ContainerClient;