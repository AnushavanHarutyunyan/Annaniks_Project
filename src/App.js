//COMPONENTS
import { useEffect } from 'react';
import Header from './components/header/header';
import Home from './screens';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import { useDispatch } from 'react-redux';
import { isLogin, setOrRemoveLoading, setSignInUser } from './Redux/actions';
import UserEP from '../src/service/api/routes/User';
import { setApiAuthorizationHeader } from './utils/LoginApi';

//CSS
import './App.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        let access = localStorage.getItem('access');
        // let refresh = localStorage.getItem('refresh');
        if (access) {
            access = access.substr(1, access.length - 2);
            setApiAuthorizationHeader(access);
            UserEP.getMe(access).then(( data ) => {
                dispatch(setSignInUser(data));
            })
            .catch(e=>{
                if(e.status === 400 || 401){
                    UserEP.getme().then((data) => {
                        // dispatch(setSignInUser(data))
                        console.log('eror get me',e.response)
                    })
                }
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
