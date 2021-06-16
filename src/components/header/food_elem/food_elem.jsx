//COMPONENTS
import Stars from '../stars/stars';

//CSS
import '../food_elem/food_elem.css';

//PICTURES
import food_elem from '../../../img/jpg/food_elem.jpg';
import ksherq from '../../../img/svg/ksherq.png';

const FoodElemComp = (props) => {
    const { title, starsCount, about, wieght, quantity, price } =
        props.foodElem;
    let stars = [];

    for (let i = 0; i < starsCount; i++) {
        stars.push(<Stars key={i} />);
    }

    return (
        <div className="col">
            <div className="d-flex justify-content-center mt-3 mb-3">
                <h4>{title}</h4>
            </div>
            <div className="food_elem">
                <div className="ml-3 mr-3">{stars}</div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <img src={food_elem} alt="foodElem" />
                </div>
                <div className="ml-3 mr-3">
                    <p>{about}</p>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-3">
                    <span>Кол-во {quantity}</span>
                </div>
                <div className="d-flex justify-content-between ml-3 mr-3 mt-4">
                    <span>
                        <img
                            src={ksherq}
                            alt="ksherq"
                            style={{ width: '15px', height: '15px' }}
                        />
                        {wieght}
                    </span>
                    <span className="price">{price}</span>
                </div>
            </div>
        </div>
    );
};

export default FoodElemComp;
