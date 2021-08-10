import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import RegistrationComponent from './components/registration/registrationPage';
import ErrorPage from './screens/error_page';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/home">
                        <App />
                    </Route>
                    <Route exact path="/login">
                        <RegistrationComponent />
                    </Route>
                    <Route exact path="/404">
                        <ErrorPage />
                    </Route>
                    {/* <Redirect to="/404" /> */}
                </Switch>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
