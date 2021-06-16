import FoodElemComp from '../header/food_elem/food_elem';
import '../header/header.css';

const foodData = [
    {
        title: 'ЗАВТРАК',
        starsCount: 6,
        about: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 г',
        quantity: 10,
        price: '300 руб',
    },
    {
        title: 'ЗАВТРАК',
        starsCount: 3,
        about: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 г',
        quantity: 10,
        price: '300 руб',
    },
    {
        title: 'ЗАВТРАК',
        starsCount: 1,
        about: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 г',
        quantity: 10,
        price: '300 руб',
    },
    {
        title: 'ЗАВТРАК',
        starsCount: 2,
        about: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 г',
        quantity: 10,
        price: '300 руб',
    },
    {
        title: 'ЗАВТРАК',
        starsCount: 2,
        about: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 г',
        quantity: 10,
        price: '300 руб',
    },
    {
        title: 'ЗАВТРАК',
        starsCount: 2,
        about: 'Бекон,яичница,картофельная запеканка,тосты,чай/кофе ',
        wieght: '500 г',
        quantity: 10,
        price: '300 руб',
    },
];

const Header = () => {
    const foodElemJSX = foodData.map((elem, indx) => {
        return (
            <div className="row" key={indx}>
                <FoodElemComp foodElem={elem} />
            </div>
        );
    });

    return (
        <>
            <div>
                <div className="clearfix pt-5 pb-5 ">
                    <h4 className="float-right ">+374 (77) 77 33 77</h4>
                    <a href="/" className="float-right phone_bar">
                        ЗАКАТЬ ЗВАНОК
                    </a>
                </div>
                <div>
                    <h1 className="h1">
                        КОМПЛЕКСНОЕ ПИТАНИЕ ДЛЯ ПРОГРАМИСТОВ{' '}
                    </h1>
                    <h2>С ДОСТАВКОЙ</h2>
                </div>
            </div>
            <div className="nav_bar">
                <ul className="nav_ul">
                    <li>ГЛАВНАЯ</li>
                    <li>МЕНЮ</li>
                    <li>ПРЕИМУЩЕСТВА</li>
                    <li>О КОМПАНИИ</li>
                    <li>ДОСТАВКА И ОПЛАТА</li>
                    <li>НАШИ</li>
                    <li>КЛИЕНТЫ</li>
                    <li>КОНТАКТЫ</li>
                </ul>
            </div>
            <div className="wraper_link">
                <a href="/" className="link_menu">
                    МЕНЮ НА ТЕКУЩУЮ НЕДЕЛЮ
                </a>
                <a href="/" className="link_menu">
                    МЕНЮ НА СЛЕДУЮЩУЮ НЕДЕЛЮ
                </a>
            </div>
            <div className="container">
                <div className="food_elem_wrapper row">{foodElemJSX}</div>
            </div>
            <div className="wraper_link">
                <a href="/" className="green">
                    СДЕЛАТЬ ЗАКАЗ
                </a>
            </div>
        </>
    );
};

export default Header;
