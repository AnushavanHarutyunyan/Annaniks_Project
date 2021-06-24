import { useTranslation } from 'react-i18next';

const CommentUser = (props) => {
    const { t } = useTranslation();
    const [user] = props.usersData;

    return (
        <div>
            <div className="d-flex justify-content-center">
                <img src={user.userPic} alt="clientPic1" className="" />
                <div className="position-absolute">
                    <div className="position-relative triangel"></div>
                </div>
                <p className="p_about_us">{user.userMessage}</p>
            </div>
            <div className="user_comment_block">
                <p>{t(user.userName)}</p>
            </div>
        </div>
    );
};

export default CommentUser;
