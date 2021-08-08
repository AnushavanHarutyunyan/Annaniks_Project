//COMPONENTS
import { useEffect } from 'react';
import Header from './components/header/header';
import Home from './screens';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';

//CSS
import './App.css';
import { useDispatch } from 'react-redux';
import { isLogin, setOrRemoveLoading, setSignInUser } from './Redux/actions';
import UserEP from '../src/service/api/routes/User';
import { setApiAuthorizationHeader } from './utils/LoginApi';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        let access = localStorage.getItem('access');
        if (access) {
            setApiAuthorizationHeader(access);
            UserEP.getMe().then(({ data }) => {
                dispatch(setSignInUser(data));
            });
            dispatch(isLogin(true));
            dispatch(setOrRemoveLoading(true));
        } else {
        }
    });
    return (
        <div className="App">
            <Header />
            <Navigation />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
