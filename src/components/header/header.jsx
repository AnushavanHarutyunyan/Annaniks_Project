//COMPONENTS
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18n';

//CSS
import './header.css';

//PICTURE
import russian from '../../img/png/russian.png';
import english from '../../img/png/english.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignIn } from '../../Redux/actions';

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const bool = useSelector((store) => store.appState.loginPageState);
    const handleChangeLang = (lng) => {
        i18n.changeLanguage(lng);
    };
    const handleSignIn = () => {
        dispatch(toggleSignIn(!bool));
    };
    return (
        <>
            <div>
                <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center pt-2 pb-2 ">
                        <div>
                            <h4 className="float-right text-white">
                                +374 (77) 77 33 77
                            </h4>
                        </div>
                        <div>
                            <a href="/" className="float-right phone_bar">
                                {t('ЗАКАТЬ ЗВАНОК')}
                            </a>
                        </div>
                        <div>
                            <Link
                                to="/sign_in"
                                className="float-right phone_bar"
                                onClick={handleSignIn}
                            >
                                {t('Sign In')}
                            </Link>
                        </div>
                        {/* <div>
                            <Link
                                to="/sign_up"
                                className="float-right phone_bar"
                            >
                                {t('Sign Up')}
                            </Link>
                        </div> */}
                        <div>
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
