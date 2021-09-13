import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { signIn } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { signInPlaceholder } from '../../utils/placeholder/placeholder';
import ReactPlaceholder from 'react-placeholder/lib';
import FloatingLabel from 'react-bootstrap-floating-label';
import FormCheck from 'react-bootstrap/FormCheck';

//CSS
import '../registration/registration_page.css';

//PICTURE
import google_icon from '../../img/svg/google.svg';
import apple_icon from '../../img/svg/apple.svg';
import facebook_icon from '../../img/svg/facebook.svg';

const LoginComponent = ({ history }) => {
    const [inputState, setInputState] = useState({
        email: '',
        password: '',
    });
    const isLoading = useSelector((state) => state.globalState.isLoading);
    const errorMessage = useSelector((state) => state.globalState.errorMessage);
    const dispatch = useDispatch();
    const handleSignIn = (e) => {
        e.preventDefault();
        if (false) {
        } else {
            dispatch(signIn(inputState));
            history.push('/');
        }
    };
    const handleChange = ({ target }) => {
        const { type, value } = target;
        setInputState({
            ...inputState,
            [type]: value,
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
                    <Form className="form" onSubmit={(e) => handleSignIn(e)}>
                        <Form.Text>
                            <h1>Sign In </h1>
                        </Form.Text>
                        <div className="icons_wrapper">
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
                        <Form.Group
                            className="mb-3 form_group"
                            controlId="formBasicEmail"
                            onChange={(e) => handleChange(e)}
                        >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                                type="email"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group
                            className="mb-3 form_group"
                            controlId="formBasicPassword"
                            onChange={(e) => handleChange(e)}
                        >
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                type="password"
                            >
                                <Form.Control
                                    types="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                            <FormCheck className="errorMessage">
                                {errorMessage}
                            </FormCheck>
                        </Form.Group>
                        <Form.Group
                            className="mb-3 form_group1"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Button
                            className="submit_btn"
                            variant="primary"
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Form>
                </ReactPlaceholder>
            </div>
        </div>
    );
};

export default withRouter(LoginComponent);
