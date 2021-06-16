//COMPONENTS

//PICTURES
import food_pic from '../../img/jpg/food_pic.jpg';
import helmet from '../../img/jpg/helmet_1.jpg';
import food_elem2 from '../../img/jpg/food_elem2.jpg';
import icon1 from '../../img/jpg/icon1.jpg';

//CSS
import '../main/main.css';

let characterData = [
    {
        about: 'Кочественные и свежие продукты',
        incon: 'icon1',
    },
    {
        about: 'Кочественные и свежие продукты',
        incon: 'icon2',
    },
    {
        about: 'Кочественные и свежие продукты',
        incon: 'icon3',
    },
    {
        about: 'Кочественные и свежие продукты',
        incon: 'icon4',
    },
    {
        about: 'Кочественные и свежие продукты',
        incon: 'icon5',
    },
];

const Main = () => {
    const characterCompJSX = characterData.map((elem, indx) => {
        return (
            <div key={indx} className="mr-4 ml-4">
                <div className="character_img ">
                    <img src={icon1} alt="icon" />
                </div>
                <p>{elem.about}</p>
            </div>
        );
    });

    return (
        <div>
            <div className="d-flex justify-content-between about">
                <span>
                    <img className="food_pic" src={food_pic} alt="food" />
                </span>
                <div className="h_div">
                    <h1 className="paragraph_1">БАЗАВАЯ ЦЕНА </h1>
                    <h3 className="paragraph_2">КОМПЛЕКСНОГО УЖИНА</h3>
                    <h1
                        style={{ color: '#80C340', padding: '0px' }}
                        className="h1"
                    >
                        300 РУБ
                    </h1>
                    <p>
                        <b>В ужин входят</b>:основное блюдо,салат,напиток,хлеб
                    </p>
                </div>
                <span>
                    <img className="" src={helmet} alt="helmet" />
                </span>
            </div>
            <div className="about2">
                <h1>КУШАТЬ ПОДАНО</h1>
                <div className="d-flex justify-content-around pt-5">
                    <div className="complex_food">
                        <div>
                            <img
                                className="food_img"
                                src={food_elem2}
                                alt="food"
                            />
                        </div>
                        <p className="">КОМПЛЕКСНЫЕ ЗАВТРАКИ</p>
                    </div>
                    <div className="complex_food">
                        <div>
                            <img
                                className="food_img"
                                src={food_elem2}
                                alt="food"
                            />
                        </div>
                        <p>КОМПЛЕКСНЫЕ ЗАВТРАКИ</p>
                    </div>
                    <div className="complex_food">
                        <div>
                            <img
                                className="food_img"
                                src={food_elem2}
                                alt="food"
                            />
                        </div>
                        <p>КОМПЛЕКСНЫЕ ЗАВТРАКИ</p>
                    </div>
                </div>
                <div className="aout_wrapper">
                    <span>ВОЗНИКЛИ ВОПРОСЫ ? - ЗВОНИТЕ </span>
                    <span>+374 77 77 33 77</span>
                    <span>
                        <a href="/" className="phone_bar">
                            ЗАКАТЬ ЗВАНОК
                        </a>
                    </span>
                </div>
                <div className="about_section">
                    <p className="mb-0">
                        Вопросы питания строителей возьмем на себя!
                    </p>
                    <h3 className="about_h1">ДОСТАВКА ДО ОБЪЕКТА</h3>
                </div>
            </div>
            <div style={{ backgroundColor: '#CDC18F' }}>
                <h1 className="pb-5 h1">ПОЧЕМУ ВЫБЕРАЮТ ИМЕННО НАС</h1>
                <div className="d-flex pb-5">{characterCompJSX}</div>
            </div>
        </div>
    );
};

export default Main;
