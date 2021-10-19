import React from 'react';
import '../App.module.scss';
import Carousel from 'react-bootstrap/Carousel'


function ContainerClient(props) {
    return (
        
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
                  
    );

}
export default ContainerClient;