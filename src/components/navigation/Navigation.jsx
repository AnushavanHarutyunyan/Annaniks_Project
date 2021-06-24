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
        </div>
    );
};

export default Navigation;
