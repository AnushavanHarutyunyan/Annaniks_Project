import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { signUp } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { signInPlaceholder } from '../../utils/placeholder/placeholder';
import ReactPlaceholder from 'react-placeholder/lib';
// import FloatingLabel from 'react-bootstrap-floating-label';
// import FormCheck from 'react-bootstrap/FormCheck';

//CSS
import '../registration/registration_page.css';

//PICTURE
import google_icon from '../../img/svg/google.svg';
import apple_icon from '../../img/svg/apple.svg';
import facebook_icon from '../../img/svg/facebook.svg';

const RegistationComponent = ({ history }) => {
    const [inputState, setInputState] = useState();
    const isLoading = useSelector((state) => state.globalState.isLoading);
    const errorMessage = useSelector((state) => state.globalState.errorMessage);
    const dispatch = useDispatch();
    const handleSignUp = (e) => {
        e.preventDefault();
        if (false) {
        } else {
            dispatch(signUp(inputState));
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
        <div className="d-flex justify-content-end">
            <div className="sing_up_wrapper">
                <ReactPlaceholder
                    showLoadingAnimation
                    type="text"
                    rows={10}
                    ready={isLoading}
                    customPlaceholder={signInPlaceholder}
                >
                    <Form className="form" onSubmit={(e) => handleSignUp(e)}>
                        <div className="mx-auto">
                            <h1 className="h1_registration_page">Sign Up </h1>
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

                        <div className="w-80 ">
                            <FormControl
                                name="firstName"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="First Name"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="lastName"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="email"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="Email"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="phone_number"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="userName"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="User Name"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="password"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="Password"
                                type="password"
                                className="mb-3 w-75 mx-auto"
                            />
                            <FormControl
                                name="confirmPassword"
                                aria-label="Text input with checkbox"
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                type="password"
                                className="mb-3 w-75 mx-auto"
                            />
                        </div>
                        <div className="btn_sign_up">
                            <Button
                                className="submit_btn"
                                variant="primary"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                        </div>
                        {errorMessage}
                    </Form>
                </ReactPlaceholder>
            </div>
        </div>
    );
};

export default withRouter(RegistationComponent);
