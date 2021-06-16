import '../our_clients/ourClients.css';
import Carusel from './carusel/Carusel';
// import Index from '../our_clients/carusel/Carusel'

const OurClients = () => {
    return (
        <div className="bg-white">
            <h1 className="h1_ourClients">НАШИ КЛИЕНТЫ</h1>
            <Carusel />
        </div>
    );
};

export default OurClients;
