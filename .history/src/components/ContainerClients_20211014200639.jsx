import React from 'react';


function ContainerClient(props) {
    return (
        <div className="Layouts">
            <div className="imgLayouts">
                <div className="titleLayout">{props.title}</div>
                <div className="containerIdVisual">
                    <img className="principalName" src={props.imagem} />
                    <label className="descricaoCliente">
                        {props.descricaoCliente}
                    </label>
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