import React from 'react';
import { Carousel } from 'bootstrap';
import '../App.module.scss';


function ContainerClient(props) {

    function navigateClientPage() {

        $('.container').animate({
            scrollLeft: $(".container2").offset().left
        },
            'slow');



    }
    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>
                <div className="containerIdVisual">
                    <div className="container1">
                        <img className="principalName" src={props.imagem} />
                        <label className="descricaoCliente">
                            {props.descricaoCliente}
                        </label>
                    </div>
                    <div className="container2">
                        <img className="principalName" src={props.imagem} />
                        <label className="descricaoCliente">
                            {props.descricaoCliente}
                        </label>
                    </div>




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