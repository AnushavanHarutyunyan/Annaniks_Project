//COMPONENTS
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFoods } from '../../Redux/actions';
import { useTranslation } from 'react-i18next';
import FoodElementComponent from './food-element/food_element';
import ReactPlaceholder from 'react-placeholder';
import { menuPlaceholder } from '../../utils/placeholder/placeholder';

//CSS
import 'react-placeholder/lib/reactPlaceholder.css';
import SearchingComp from '../../components/searching/Searching';

const Menu = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.globalState.isLoading);
    const { foodsData } = useSelector((store) => store.allFoodsState);

    //Translation
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    const foodElemJSX = foodsData.map((elem, indx) => {
        return (
            <div className="row ml-2 mr-2" key={indx}>
                <Link to={`/home/menu/breakfast?id=${elem.id}`}>
                    <FoodElementComponent data={elem} />
                </Link>
            </div>
        );
    });

    return (
        <div>
            <SearchingComp />
            <div className="wraper_link">
                <a href="/" className="link_menu">
                    {t('MENU FOR THE CURRENT WEEK')}
                </a>
                <a href="/" className="link_menu">
                    {t('МЕНЮ НА СЛЕДУЮЩУЮ НЕДЕЛЮ')}
                </a>
            </div>

            <div className="container">
                <div className="food_elem_wrapper row">
                    <ReactPlaceholder
                        showLoadingAnimation
                        type="text"
                        rows={10}
                        ready={isLoading}
                        customPlaceholder={menuPlaceholder}
                    >
                        {foodElemJSX}
                    </ReactPlaceholder>
                </div>
            </div>
            <div className="wraper_link">
                <a href="/" className="green">
                    {t('СДЕЛАТЬ ЗАКАЗ')}
                </a>
            </div>
        </div>
    );
};

export default Menu;
