import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { signIn } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { signInPlaceholder } from '../../utils/placeholder/placeholder';
import ReactPlaceholder from 'react-placeholder/lib';

//CSS
import '../registration/registration_page.css';

//PICTURE
import google_icon from '../../img/svg/google.svg';
import apple_icon from '../../img/svg/apple.svg';
import facebook_icon from '../../img/svg/facebook.svg';

const LoginComponent = ({ history }) => {
    const [inputState, setInputState] = useState({
        username: '',
        password: '',
    });
    const isLoading = useSelector((state) => state.globalState.isLoading);
    const errorMessage = useSelector((state) => state.globalState.errorMessage);
    const dispatch = useDispatch();
    const handleSignIn = (e) => {
        e.preventDefault();
        Object.assign(inputState,{role_code:"CL"})
        if (false) {
        } else {
            dispatch(signIn(inputState));
            history.push('/');
        }
    };
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setInputState({
            ...inputState,
            [name]: value,
        });
    };

    return (
        <div className="d-flex justify-content-end min-vh-100">
            <div className="sing_up_wrapper">
                <ReactPlaceholder
                    showLoadingAnimation
                    type="text"
                    rows={10}
                    ready={isLoading}
                    customPlaceholder={signInPlaceholder}
                >
                    <Form className="form" onSubmit={(e) => handleSignIn(e)}>
                        <div className="mx-auto">
                            <h1 className="h1_registration_page">Sign In</h1>
                        </div>
                        <div className="icons_wrapper mx-auto">
                            <div>
                                <Link to="/">
                                    <img src={google_icon} alt="google_icon" />
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    <img
                                        src={apple_icon}
                                        alt="apple_icon"
                                        className="apple_icon"
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    <img
                                        src={facebook_icon}
                                        alt="facebook_icon"
                                    />
                                </Link>
                            </div>
                        </div>
                        
                        <FormControl
                                name="username"
                                onChange={handleChange}
                                placeholder="Email address"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="password"
                                onChange={handleChange}
                                placeholder="Password"
                                type="password"
                                className="mb-3 w-75 mx-auto"
                            />
                        
                        {errorMessage}
                        <div className="btn_sign_up">
                            <Button
                                className="submit_btn"
                                variant="primary"
                                type="submit"
                            >
                                Sign In
                            </Button>
                        </div>
                    </Form>
                </ReactPlaceholder>
            </div>
        </div>
    );
};

export default withRouter(LoginComponent);
