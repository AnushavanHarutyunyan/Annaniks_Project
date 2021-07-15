//COMPONENTS
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './about_us/AboutUS';
import Main from './main/index';
import OurClients from './our_clients/OurClients';
import Payment from './payment/Payment';
import Menu from './menu/Menu';
import Advantages from './advantages/Advantages';
import Map from './map/Map';
import Contact from './contact/Contact';
import FoodItem from '../screens/food_item/FoodItem';
import ErrorPage from './error_page';

const Home = () => {
    return (
        <Switch>
            <Route path="/main" exact>
                <Main />
            </Route>
            <Route path="/menu" exact>
                <Menu />
            </Route>
            <Route
                path="/breakfast/"
                render={(history) => <FoodItem props={history} />}
            />
            <Route path="/advantages" exact>
                <Advantages />
            </Route>
            <Route path="/about_company" exact>
                <AboutUs />
            </Route>
            <Route path="/our_clients" exact>
                <OurClients />
            </Route>
            <Route path="/shipping_payment" exact>
                <Payment />
            </Route>
            <Route path="/contact" exact>
                <Contact />
            </Route>
            <Route path="/map" exact>
                <Map />
            </Route>
            <Route path="/404">
                <ErrorPage />
            </Route>
            <Redirect to="/404" />
        </Switch>
    );
};

export default Home;
