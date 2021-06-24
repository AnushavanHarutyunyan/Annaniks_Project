import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18n';
//CSS
import './header.css';

const Header = () => {
    const { t } = useTranslation();

    const handleChangeLang = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div>
                <div className="d-flex flex-column align-items-end pt-5 pb-2 ">
                    <div className="pb-4">
                        <h4 className="float-right text-white">
                            +374 (77) 77 33 77
                        </h4>
                    </div>
                    <div className="pb-4">
                        <a href="/" className="float-right phone_bar">
                            {t('ЗАКАТЬ ЗВАНОК')}
                        </a>
                    </div>
                    <div>
                        <Button
                            className="mr-4"
                            onClick={() => handleChangeLang('en')}
                        >
                            EN
                        </Button>
                        <Button onClick={() => handleChangeLang('ru')}>
                            RU
                        </Button>
                    </div>
                </div>
                <div>
                    <h1 className="h1">
                        {t('КОМПЛЕКСНОЕ ПИТАНИЕ ДЛЯ ПРОГРАМИСТОВ')}
                    </h1>
                    <h2>{t('С ДОСТАВКОЙ')}</h2>
                </div>
            </div>
        </>
    );
};

export default Header;
