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
                <App />
                <Switch>
                    <Route path="/home" exact></Route>
                    <Route path="/login" exact>
                        <RegistrationComponent />
                    </Route>
                    <Route path="/404" exact>
                        <ErrorPage />
                    </Route>
                    {/* <Redirect to="/404" /> */}
                </Switch>
                ;
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
