//COMPONENTS
import AboutUs from './about_us/AboutUS';
import Header from './components/header/header';
import Main from '../src/components/main/Main';
import OurClients from './components/our_clients/OurClients';
import Footer from '../src/components/footer/Footer';
import Payment from '../src/components/payment/Payment';

//CSS
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <div className="App">
                <Header />
                <Main />
                <Payment />
                <OurClients />
                <AboutUs />
                <Footer />
            </div>
        </div>
    );
}

export default App;
