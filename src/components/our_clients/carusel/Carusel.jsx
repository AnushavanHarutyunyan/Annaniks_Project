import client from '../../../img/jpg/food_elem.jpg';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

//Css
import '../carusel/carusel.css';

const Carusel = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="prev_next_btn">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className=" caruselBlock">
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
            </div>
            <div className="prev_next_btn">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default Carusel;
