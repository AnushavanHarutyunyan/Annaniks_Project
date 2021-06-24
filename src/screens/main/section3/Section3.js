//JPG
import { useTranslation } from 'react-i18next';
import icon1 from '../../../img/jpg/icon1.jpg';

//CSS
import '../main.css';

let characterData = [
    {
        description: 'Кочественные и свежие продукты',
        incon: 'icon1',
    },
    {
        description: 'Кочественные и свежие продукты',
        incon: 'icon2',
    },
    {
        description: 'Кочественные и свежие продукты',
        incon: 'icon3',
    },
    {
        description: 'Кочественные и свежие продукты',
        incon: 'icon4',
    },
    {
        description: 'Кочественные и свежие продукты',
        incon: 'icon5',
    },
];

const Section3 = () => {
    const { t } = useTranslation();
    const characterCompJSX = characterData.map((elem, indx) => {
        return (
            <div key={indx} className="mr-4 ml-4">
                <div className="character_img ">
                    <img src={icon1} alt="icon" />
                </div>
                <p>{t(elem.description)}</p>
            </div>
        );
    });
    return (
        <div style={{ backgroundColor: '#CDC18F' }}>
            <h1 className="pb-5 h1">{t('ПОЧЕМУ ВЫБЕРАЮТ ИМЕННО НАС')}</h1>
            <div className="d-flex pb-5">{characterCompJSX}</div>
        </div>
    );
};

export default Section3;
