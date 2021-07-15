import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//CSS
import '../registration/registration_page.css';

//PICTURE
import google_icon from '../../img/svg/google.svg';
import apple_icon from '../../img/svg/apple.svg';
import facebook_icon from '../../img/svg/facebook.svg';

const RegistrationComponent = () => {
    return (
        <div className="d-flex justify-content-end">
            <div className="registrtion_info">
                <h1>Registration Page</h1>
            </div>
            <div className="sing_up_wrapper">
                <Form className="form">
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
                                <img src={facebook_icon} alt="facebook_icon" />
                            </Link>
                        </div>
                    </div>
                    <Form.Group
                        className="mb-3 form_group"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group
                        className="mb-3 form_group"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
            </div>
        </div>
    );
};

export default RegistrationComponent;
