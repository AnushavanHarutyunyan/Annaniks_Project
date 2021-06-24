import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//CSS
import '../footer/footer.css';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer_block">
            <ul className="nav_ul">
                <li>
                    <Link to="/main">{t('ГЛАВНАЯ')}</Link>
                </li>
                <li>
                    <Link to="/menu">{t('МЕНЮ')}</Link>
                </li>
                <li>
                    <Link to="/advantages">{t('ПРЕИМУЩЕСТВА')}</Link>
                </li>
                <li>
                    <Link to="/about_company">{t('О КОМПАНИИ')}</Link>
                </li>
                <li>
                    <Link to="/shipping_payment">{t('ДОСТАВКА И ОПЛАТА')}</Link>
                </li>
                <li>
                    <Link to="/our_clients">{t('НАШИ КЛИЕНТЫ')}</Link>
                </li>
                <li>
                    <Link to="/contact">{t('КОНТАКТЫ')}</Link>
                </li>
            </ul>
            <div className="footer_phone_bar">
                <h4>+374 (77) 77 33 77</h4>
                <a href="/" className="phone_bar">
                    {t('ЗАКАТЬ ЗВАНОК')}
                </a>
            </div>
        </div>
    );
};

export default Footer;
