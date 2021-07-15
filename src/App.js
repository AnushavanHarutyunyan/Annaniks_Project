//COMPONENTS
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Home from './screens';
import Footer from './components/footer/Footer';

//CSS
import './App.css';
import Navigation from './components/navigation/Navigation';
import RegistrationComponent from './components/registration/registrationPage';
import { useSelector } from 'react-redux';

function App() {
    const bool = useSelector((store) => store.appState.loginPageState);
    return (
        <BrowserRouter>
            <div className="wrapper">
                {bool ? (
                    <RegistrationComponent />
                ) : (
                    <div className="App">
                        <Header />
                        <Navigation />
                        <Home />
                        <Footer />
                    </div>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
