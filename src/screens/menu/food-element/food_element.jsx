//COMPONENTS

import { useTranslation } from 'react-i18next';
// import Stars from './stars/stars';

//CSS
import './food_element.css';

//PICTURES
import food_elem from '../../../img/jpg/food_elem.jpg';
import ksherq from '../../../img/svg/ksherq.png';

const FoodElementComponent = (props) => {
    const { t } = useTranslation();
    const { description, name, id, price } = props.data;

    return (
        <div className="col">
            <div className="d-flex justify-content-center mt-3 mb-3">
                {/* <h4>{t(title)}</h4> */}
                {<h4>{name}</h4>}
            </div>
            <div className="food_elem">
                {/* <div className="ml-3 mr-3">{stars}</div> */}
                <div className="ml-3 mr-3">{`id-${id}`}</div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <img src={food_elem} alt="foodElem" />
                </div>
                <div className="ml-3 mr-3">
                    <p>Description {t(description)}</p>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-3">
                    <span>{/* {t('Кол-во')} {quantity} */}</span>
                </div>
                <div className="d-flex justify-content-between ml-3 mr-3 mt-4">
                    <span>
                        <img
                            src={ksherq}
                            alt="ksherq"
                            style={{ width: '15px', height: '15px' }}
                        />
                        {/* {wieght} */}
                        {t('г')}
                    </span>
                    <span className="price">
                        {price} {t('руб')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoodElementComponent;
