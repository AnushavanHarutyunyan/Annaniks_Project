//JPG
import { useTranslation } from 'react-i18next';
import food_elem2 from '../../../img/jpg/food_elem2.jpg';

//CSS
import '../../main/main.css';

const complexFoodData = [
    {
        img: food_elem2,
        description: 'КОМПЛЕКСНЫЕ ЗАВТРАКИ',
    },
    {
        img: food_elem2,
        description: 'КОМПЛЕКСНЫЕ ЗАВТРАКИ',
    },
    {
        img: food_elem2,
        description: 'КОМПЛЕКСНЫЕ ЗАВТРАКИ',
    },
];

const Section2 = () => {
    const { t } = useTranslation();
    const complexFoodDataJSX = complexFoodData.map((item, indx) => {
        return (
            <div className="complex_food" key={indx}>
                <div>
                    <img className="food_img" src={item.img} alt="food" />
                </div>
                <p className="">{t(item.description)}</p>
            </div>
        );
    });

    return (
        <div className="about2">
            <h1>{t('КУШАТЬ ПОДАНО')}</h1>
            <div className="d-flex justify-content-around pt-3">
                {complexFoodDataJSX}
            </div>
            <div className="aout_wrapper">
                <span>{t('ВОЗНИКЛИ ВОПРОСЫ ? - ЗВОНИТЕ')}</span>
                <span>+374 77 77 33 77</span>
                <span>
                    <a href="/" className="phone_bar">
                        {t('ЗАКАТЬ ЗВАНОК')}
                    </a>
                </span>
            </div>
            <div className="about_section">
                <p className="mb-0">
                    {t('Вопросы питания строителей возьмем на себя!')}
                </p>
                <h3 className="about_h1">{t('ДОСТАВКА ДО ОБЪЕКТА')}</h3>
            </div>
        </div>
    );
};

export default Section2;
