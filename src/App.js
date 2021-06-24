//COMPONENTS
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Home from './screens';
import Footer from './components/footer/Footer';

//CSS
import './App.css';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="App">
                    <Header />
                    <Navigation />
                    <Home />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
