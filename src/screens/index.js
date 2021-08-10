//COMPONENTS
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
            <Route path={['/', '/home', '/home/main']} exact>
                <Main />
            </Route>
            <Route path="/home/menu" exact>
                <Menu />
            </Route>
            <Route
                path="/home/breakfast/"
                render={(history) => <FoodItem props={history} />}
            />
            <Route path="/home/advantages" exact>
                <Advantages />
            </Route>
            <Route path="/home/about_company" exact>
                <AboutUs />
            </Route>
            <Route path="/home/our_clients" exact>
                <OurClients />
            </Route>
            <Route path="/home/shipping_payment" exact>
                <Payment />
            </Route>
            <Route path="/home/contact" exact>
                <Contact />
            </Route>
            <Route path="/home/map" exact>
                <Map />
            </Route>
            {/* <Route path="/home/404" exact>
                <ErrorPage />
            </Route>
            <Redirect to="/home/404" /> */}
        </Switch>
    );
};

export default Home;
