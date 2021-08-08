//COMPONENTS
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { outUserPage } from '../../Redux/actions';
import Button from 'react-bootstrap/Button';

//CSS
import './header.css';

//PICTURE
import russian from '../../img/png/russian.png';
import english from '../../img/png/english.png';
import userPic from '../../img/png/user_pic.png';
import { withRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Header = ({ history }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.authState.isLogin);
    const handleChangeLang = (lng) => {
        i18n.changeLanguage(lng);
    };
    const handleOut = () => {
        dispatch(outUserPage());
        history.push('/home');
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
                            <Button
                                href="/"
                                variant="danger"
                                className="ml-2 mr-2"
                            >
                                {t('ЗАКАТЬ ЗВАНОК')}
                            </Button>
                            {isLogin ? (
                                <Button onClick={handleOut}>
                                    {t('Выход')}
                                </Button>
                            ) : (
                                <Button className="" href="/login">
                                    {t('Sign In')}
                                </Button>
                            )}
                        </div>
                        <div>
                            <div className="wrapper_lng">
                                {isLogin && (
                                    <span className="ml-2 mr-2">
                                        <img src={userPic} alt="userPic" />
                                    </span>
                                )}

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

export default withRouter(Header);
