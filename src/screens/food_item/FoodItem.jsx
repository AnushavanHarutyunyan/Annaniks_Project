import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { getUserById } from '../../Redux/actions';

import ReactPlaceholder from 'react-placeholder';
import { awesomePlaceholder } from '../../utils/placeholder/placeholder';

//CSS
import 'react-placeholder/lib/reactPlaceholder.css';

//CSS
import '../food_item/food_item.css';

//IMAGE
import food_element_Picture from '../../img/jpg/food_elem.jpg';

const FoodItem = ({ props }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const foodItemById = useSelector((state) => state.allFoodsState.foodItem);
    const path_id = +window.location.search.slice(4); /// ??????????
    useEffect(() => {
        dispatch(getUserById(path_id));
    }, []);

    const isLoading = useSelector((state) => state.globalState.isLoading);
    const foodItemByIdJSX = foodItemById.map((item, indx) => {
        return (
            <div className="food_item" key={indx}>
                <div>
                    <h1>{t(`Name-${item.name}`)}</h1>
                </div>
                <div>
                    <h1>{`Description-${item.description}`}</h1>
                    <h1>{`Id-${item.id}`}</h1>
                </div>
                <div>
                    <img src={item.image} alt="foodItemById" />
                </div>
                <div>
                    <p>{t(`Price-${item.price}`)}</p>
                </div>
                <div>
                    <p>{`Is vegetarian-${item.is_vegetarian}`}</p>
                </div>
                <div>
                    <p>{`Is vegan-${item.is_vegan}`}</p>
                </div>
                <div>
                    <p>{`Is healthy-${item.is_healthy}`}</p>
                </div>
                <Button
                    onClick={() => {
                        props.history.push('/home/menu');
                    }}
                >
                    Back To Menu
                </Button>
            </div>
        );
    });
    return (
        <div className="food_item_wrapper">
            <ReactPlaceholder
                showLoadingAnimation
                type="text"
                rows={10}
                ready={isLoading}
                customPlaceholder={awesomePlaceholder}
                className="react_placeholder"
            >
                {foodItemByIdJSX}
            </ReactPlaceholder>
        </div>
    );
};

export default FoodItem;
