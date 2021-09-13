//COMPONENTS
import { Switch, Route } from 'react-router-dom';
import AboutUs from './about_us/AboutUS';
import Main from './main/index';
import OurClients from './our_clients/OurClients';
import Payment from './payment/Payment';
import Menu from './menu/Menu';
import Advantages from './advantages/Advantages';
// import Map from './map/Map';
import Contact from './contact/Contact';
import FoodItem from '../screens/food_item/FoodItem';

const Home = () => {
    return (
        <Switch>
            <Route component={Main} path={['/', '/home', '/home/main']} exact />
            <Route component={Menu} path="/home/menu" exact />
            <Route
                path="/home/menu/breakfast/"
                render={(history) => <FoodItem props={history} />}
            />
            <Route component={Advantages} path="/home/advantages" exact />
            <Route component={AboutUs} path="/home/about_company" exact />
            <Route component={OurClients} path="/home/our_clients" exact />
            <Route component={Payment} path="/home/shipping_payment" exact />
            <Route component={Contact} path="/home/contact" exact />
        </Switch>
    );
};

export default Home;
