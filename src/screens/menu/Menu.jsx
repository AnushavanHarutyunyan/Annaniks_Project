//COMPONENTS
import FoodElementComp from './food-element/food_element';
import { Link, useRouteMatch } from 'react-router-dom';
import Test from '../test/Test';
import { useTranslation } from 'react-i18next';

const foodData = [
    {
        id: 1,
        title: 'ЗАВТРАК',
        starsCount: 6,
        discription: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 ',
        quantity: 10,
        price: '300 ',
    },
    {
        id: 2,
        title: 'ЗАВТРАК',
        starsCount: 3,
        discription: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 ',
        quantity: 10,
        price: '300 ',
    },
    {
        id: 3,
        title: 'ЗАВТРАК',
        starsCount: 1,
        discription: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 ',
        quantity: 10,
        price: '300 ',
    },
    {
        id: 4,
        title: 'ЗАВТРАК',
        starsCount: 2,
        discription: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 ',
        quantity: 10,
        price: '300 ',
    },
    {
        id: 5,
        title: 'ЗАВТРАК',
        starsCount: 2,
        discription: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 ',
        quantity: 10,
        price: '300 ',
    },
    {
        id: 6,
        title: 'ЗАВТРАК',
        starsCount: 2,
        discription: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 ',
        quantity: 10,
        price: '300 ',
    },
];

const Menu = (props) => {
    const { t } = useTranslation();
    const { url } = useRouteMatch();
    const foodElemJSX = foodData.map((elem, indx) => {
        return (
            <div className="row" key={indx}>
                <Link to={`${url}/breakfast?id=${elem.id}`}>
                    <FoodElementComp foodElem={elem} />
                </Link>
            </div>
        );
    });

    let url1 = window.location.search.slice(1);

    return (
        <div>
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
                    {url1 === 'id=1' ? (
                        <Test props={props.history} />
                    ) : (
                        foodElemJSX
                    )}
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
