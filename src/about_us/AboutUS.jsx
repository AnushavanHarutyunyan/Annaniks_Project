//JPG
import clientPic1 from '../img/png/client_pic_1.png';
import clientPic2 from '../img/png/client_pic_2.png';
import clientPic3 from '../img/png/client_pic_3.png';
import clientPic4 from '../img/png/client_pic_4.png';
import map from '../img/jpg/map.jpg';

//CSS
import '../about_us/about_us.css';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import CommentUser from './CommentUser';

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
        userName: 'Armen',
        userPic: clientPic2,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
    {
        id: 3,
        userName: 'Karen',
        userPic: clientPic3,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
    {
        id: 4,
        userName: 'Vaas',
        userPic: clientPic4,
        userMessage:
            'Lorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasd Lorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fasdcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas dcegasdLorem ipsum fas',
    },
];

const AboutUs = () => {
    const usersCommentJSX = usersCommentsData.map((elem, indx) => {
        return (
            <div key={indx}>
                <div className="ml-2 mr-2">
                    <div>
                        <img
                            src={elem.userPic}
                            alt="userPic"
                            className="cursorPointer"
                        />
                    </div>
                    <p>{elem.userName}</p>
                </div>
            </div>
        );
    });
    return (
        <div className="wrapper_about_us text_center_about_us">
            <h1 className="h1_about_us">ОТЗЫВЫ О НАС</h1>
            <div className="content_about_us">
                <CommentUser usersData={usersCommentsData} />
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <div className="arrow">
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <div className="d-flex justify-content-center">
                    {usersCommentJSX}
                </div>
                <div className="arrow">
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>
            </div>
            <div className="mt-5">
                <img src={map} alt="map" className="map_block " />
            </div>
        </div>
    );
};

export default AboutUs;
