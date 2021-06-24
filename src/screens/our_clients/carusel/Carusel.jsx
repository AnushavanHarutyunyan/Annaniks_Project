import React from 'react';
import Slider from 'react-slick';

//IMG
import client from '../../../img/jpg/food_elem.jpg';

//CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carusel.css';

const Carusel = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="carusel_wrapper">
            <Slider {...settings}>
                <div>
                    <img src={client} alt="client" />
                </div>
                <div>
                    <img src={client} alt="client" />
                </div>
                <div>
                    <img src={client} alt="client" />
                </div>
                <div>
                    <img src={client} alt="client" />
                </div>
                <div>
                    <img src={client} alt="client" />
                </div>
                <div>
                    <img src={client} alt="client" />
                </div>
            </Slider>
        </div>
    );
};

export default Carusel;
