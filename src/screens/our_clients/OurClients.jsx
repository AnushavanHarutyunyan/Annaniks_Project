//CSS
import '../our_clients/ourClients.css';

//COMPONENTS
import Carusel from '../../screens/our_clients/carusel/Carusel';
import { useTranslation } from 'react-i18next';

const OurClients = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white">
            <h1 className="h1_ourClients">{t('НАШИ КЛИЕНТЫ')}</h1>
            <Carusel />
        </div>
    );
};

export default OurClients;
