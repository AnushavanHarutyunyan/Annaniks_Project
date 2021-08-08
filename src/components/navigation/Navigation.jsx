import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//COMPONENTS

const Navigation = () => {
    const { t } = useTranslation();
    return (
        <div className="nav_bar">
            <ul className="nav_ul">
                <li>
                    <Link to="/home/main">{t('ГЛАВНАЯ')}</Link>
                </li>
                <li>
                    <Link to="/home/menu">{t('МЕНЮ')}</Link>
                </li>
                <li>
                    <Link to="/home/advantages">{t('ПРЕИМУЩЕСТВА')}</Link>
                </li>
                <li>
                    <Link to="/home/about_company">{t('О КОМПАНИИ')}</Link>
                </li>
                <li>
                    <Link to="/home/shipping_payment">
                        {t('ДОСТАВКА И ОПЛАТА')}
                    </Link>
                </li>
                <li>
                    <Link to="/home/our_clients">{t('НАШИ КЛИЕНТЫ')}</Link>
                </li>
                <li>
                    <Link to="/home/contact">{t('КОНТАКТЫ')}</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
