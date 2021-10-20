//COMPONENTS
import { useEffect } from 'react';
import Header from './components/header/header';
import Home from './screens';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import { useDispatch } from 'react-redux';
import {
    isLogin,
    setOrRemoveLoading,
    getFoodCategoriesNames,
    getFoodsTypesNames,
    getMe,
} from './Redux/actions';
import { setApiAuthorizationHeader } from './utils/LoginApi';

//CSS
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoodCategoriesNames());
        dispatch(getFoodsTypesNames());

        // UserEP.getFoodCategoriesNames()
        //     .then(({ data }) => {
        //         dispatch(getFoodCategoriesNames(data.results));
        //     })
        //     .catch((e) => console.log(e.response, 'getFoodsCategoriesNames'));
        // UserEP.getFoodsTypes()
        //     .then(({ data }) => dispatch(getFoodsTypes(data.results)))
        //     .catch((e) => console.log(e.response, 'getFoodsTypes'));
    }, []);

    useEffect(() => {
        let access = localStorage.getItem('access');
        // let refresh = localStorage.getItem('refresh');
        if (access) {
            access = access.substr(1, access.length - 2);
            setApiAuthorizationHeader(access);
            dispatch(getMe());

            // UserEP.getMe()
            //     .then(() => {
            //         const user = JSON.parse(localStorage.getItem('user'));
            //         dispatch(setSignInUser(user));
            //     })
            //     .catch((e) => {
            //         if (e.status === 400 || 401) {
            //             console.log('eror getMe', e.statusText);
            //         }
            //     });
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
