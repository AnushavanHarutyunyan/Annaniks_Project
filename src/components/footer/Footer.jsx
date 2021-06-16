import '../footer/footer.css';

const Footer = () => {
    return (
        <div className="footer_block">
            <ul className="nav_ul">
                <li>ГЛАВНАЯ</li>
                <li>МЕНЮ</li>
                <li>ПРЕИМУЩЕСТВО</li>
                <li>О КОМПАНИИ</li>
                <li>ДОСТАВКА И ОПЛАТА</li>
                <li>НАШИ КЛИЕНТЫ</li>
                <li>КОНТАКТЫ</li>
            </ul>
            <div className="footer_phone_bar">
                <h4>+374 (77) 77 33 77</h4>
                <a href="/" className="phone_bar">
                    ЗАКАТЬ ЗВАНОК
                </a>
            </div>
        </div>
    );
};

export default Footer;
