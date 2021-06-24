//COMPONENTS
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import CommentUser from './CommentUser';

//JPG
import clientPic1 from '../../img/png/client_pic_1.png';
import clientPic2 from '../../img/png/client_pic_2.png';
import clientPic3 from '../../img/png/client_pic_3.png';
import clientPic4 from '../../img/png/client_pic_4.png';

//CSS
import '../about_us/about_us.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
};
const usersCommentsData = [
    {
        id: 1,
        userName: 'Игорь',
        userPic: clientPic1,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
    {
        id: 2,
        userName: 'Владимир',
        userPic: clientPic2,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
    {
        id: 3,
        userName: 'Ирина',
        userPic: clientPic3,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
    {
        id: 4,
        userName: 'Вика',
        userPic: clientPic4,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
];

const AboutUs = () => {
    const { t } = useTranslation();
    const usersCommentJSX = usersCommentsData.map((elem, indx) => {
        return (
            <div className="ml-2 mr-2" key={indx}>
                <div>
                    <img
                        src={elem.userPic}
                        alt="userPic"
                        className="cursorPointer"
                    />
                </div>
                <p>{t(elem.userName)}</p>
            </div>
        );
    });
    return (
        <div className="wrapper_about_us text_center_about_us">
            <h1 className="h1_about_us">{t('ОТЗЫВЫ О НАС')}</h1>
            <div className="content_about_us">
                <CommentUser usersData={usersCommentsData} />
            </div>
            <Slider {...settings}>{usersCommentJSX}</Slider>
        </div>
    );
};

export default AboutUs;
