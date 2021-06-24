//COMPONENTS
import AboutUs from './about_us/AboutUS';
import Main from './main/index';
import OurClients from './our_clients/OurClients';
import Payment from './payment/Payment';
import { Switch, Route } from 'react-router-dom';
import Menu from './menu/Menu';
import Advantages from './advantages/Advantages';
import Map from './map/Map';
import Contact from './contact/Contact';

const Home = () => {
    return (
        <Switch>
            <Route path="/main">
                <Main />
            </Route>
            <Route path="/menu" render={(props) => <Menu {...props} />} />
            <Route path="/advantages">
                <Advantages />
            </Route>
            <Route path="/about_company">
                <AboutUs />
            </Route>
            <Route path="/our_clients">
                <OurClients />
            </Route>
            <Route path="/shipping_payment">
                <Payment />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            {/* <Route path="/about"></Route> */}
            <Route path="/map">
                <Map />
            </Route>
        </Switch>
    );
};

export default Home;
