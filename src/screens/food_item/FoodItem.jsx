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
    const path_id = +window.location.search.slice(4); /// ??????????

    useEffect(() => {
        dispatch(getUserById(path_id));
    }, [dispatch, path_id]);

    const foodItemById = useSelector((state) => state.allFoodsState.foodItem);
    const isLoading = useSelector((state) => state.globalState.isLoading);

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
                {
                    <div className="food_item">
                        <div>
                            <h1>{t(`User-Name-${foodItemById.username}`)}</h1>
                        </div>
                        <div>
                            <h1>{`name-${foodItemById.name}`}</h1>
                            <h1>{`id-${foodItemById.id}`}</h1>
                        </div>
                        <div>
                            <img
                                src={food_element_Picture}
                                alt="foodItemById"
                            />
                        </div>
                        <div>
                            <p>{t(`email-${foodItemById.phone}`)}</p>
                        </div>
                        <div>
                            <p>{`phone-${foodItemById.email}`}</p>
                        </div>
                        <Button
                            onClick={() => {
                                props.history.push('/menu');
                            }}
                        >
                            Back To Menu
                        </Button>
                    </div>
                }
            </ReactPlaceholder>
        </div>
    );
};

export default FoodItem;
