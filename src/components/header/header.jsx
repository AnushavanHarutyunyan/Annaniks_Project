//COMPONENTS
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18n';
//CSS
import './header.css';
//PICTURE
import russian from '../../img/png/russian.png';
import english from '../../img/png/english.png';

const Header = () => {
    const { t } = useTranslation();

    const handleChangeLang = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div>
                <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center pt-2 pb-2 ">
                        <div className="">
                            <h4 className="float-right text-white">
                                +374 (77) 77 33 77
                            </h4>
                        </div>
                        <div className="">
                            <a href="/" className="float-right phone_bar">
                                {t('ЗАКАТЬ ЗВАНОК')}
                            </a>
                        </div>
                        <div>
                            {/* <Button
                                className="mr-2 ml-2"
                                onClick={() => handleChangeLang('en')}
                            >
                                EN
                            </Button>
                            <Button onClick={() => handleChangeLang('ru')}>
                                RU
                            </Button> */}
                            <div className="wrapper_lng">
                                <span
                                    className="lng"
                                    onClick={() => handleChangeLang('ru')}
                                >
                                    <img src={russian} alt="lng" />
                                </span>
                                <span onClick={() => handleChangeLang('en')}>
                                    <img
                                        className="lng"
                                        src={english}
                                        alt="lng"
                                    />
                                </span>
                            </div>
                        </div>
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
