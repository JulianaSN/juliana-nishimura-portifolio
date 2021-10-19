import {React,useState} from 'react';
import '../App.module.scss';
import Carousel from 'react-bootstrap/Carousel'


function ContainerClient(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel>

            <Carousel.Item activeIndex={index} onSelect={handleSelect}>
                <img className="principalName" src={props.imagem1} />
                {/* <Carousel.Caption>
                    <label className="descricaoCliente">
                        {props.descricaoCliente1}
                    </label>
                </Carousel.Caption> */}

            </Carousel.Item>
            <Carousel.Item>
                <img className="principalName" src={props.imagem2} />
                <Carousel.Caption>
                    <label className="descricaoCliente">
                        {props.descricaoCliente2}
                    </label>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img className="principalName" src={props.imagem3} />
                <Carousel.Caption>
                    <label className="descricaoCliente">
                        {props.descricaoCliente3}
                    </label>
                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
    );
}
export default ContainerClient;