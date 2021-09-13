import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import LoginComponent from './components/registration/loginPage';
// import ErrorPage from './screens/error_page';
import RegistationComponent from './components/registration/registrationPage';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route component={App} exact path={'/'} />
                    <Route component={LoginComponent} exact path={'/login'} />
                    <Route
                        component={RegistationComponent}
                        exact
                        path={'/register_user'}
                    />
                    <Route component={App} path={'/home'} />
                    {/* <Route component={ErrorPage} /> */}
                    {/* <Redirect to="/" /> */}
                </Switch>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
