//PICTURES
import { useTranslation } from 'react-i18next';
import food_pic from '../../../img/jpg/food_pic.jpg';
import helmet from '../../../img/jpg/helmet_1.jpg';

//CSS
import '../../main/main.css';

const Section1 = () => {
    const { t } = useTranslation();
    return (
        <div className="d-flex justify-content-between about">
            <span>
                <img className="food_pic" src={food_pic} alt="food" />
            </span>
            <div className="h_div">
                <h1 className="paragraph_1">{t('БАЗАВАЯ ЦЕНА')} </h1>
                <h3 className="paragraph_2">{t('КОМПЛЕКСНОГО УЖИНА')}</h3>
                <h1 style={{ color: '#80C340', padding: '0px' }} className="h1">
                    300 {t('РУБ')}
                </h1>
                <p>{t('В ужин входят,основное блюдо,салат,напиток,хлеб')}</p>
            </div>
            <span>
                <img className="" src={helmet} alt="helmet" />
            </span>
        </div>
    );
};

export default Section1;
