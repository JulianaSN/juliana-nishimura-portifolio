import { React, useState } from 'react';
import styles from '../App.module.scss';
import Carousel from 'react-bootstrap/Carousel'


function ContainerClient(props) {

    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>




                <img className="principalName" src={props.imagem1} />

                {props.imagem2 !== '' ? (
                    <>
                        <img className="principalName" src={props.imagem2} />
                    </>
                )
                    : ''}

               


            </div>
        </div >


    );
}
export default ContainerClient;