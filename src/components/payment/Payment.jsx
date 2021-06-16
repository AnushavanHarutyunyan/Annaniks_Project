//FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandHoldingUsd,
    faMoneyCheck,
    faCreditCard,
    faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

//CSS
import '../payment/payment.css';

const paymentData = [
    {
        header: 'ОПЛАТА НАЛИЧНЫМИ',
        icon: faHandHoldingUsd,
        paymentAbout:
            'Вы оплачивайтье заказ наличными курьеру.Вместе с заказам вы получайте заказам вы получайте',
    },
    {
        header: 'БЕЗНАЛИЧНЫЙ РАСЧЕТ ДЛЯ ЮР.ЛИЦ',
        icon: faMoneyCheck,
        paymentAbout:
            'Вы оплачивайтье заказ наличными курьеру.Вместе с заказам вы получайте заказам вы получайте',
    },
    {
        header: 'ОПЛАТА БАНКОВСКИМИ КАРТАМИ',
        icon: faCreditCard,
        paymentAbout:
            'Вы оплачивайтье заказ наличными курьеру.Вместе с заказам вы получайте заказам вы получайте',
    },
    {
        header: 'ЭЛЕКТРОННЫМИ ДЕНЬГАМИ',
        icon: faMoneyBillAlt,
        paymentAbout:
            'Вы оплачивайтье заказ наличными курьеру.Вместе с заказам вы получайте заказам вы получайте',
    },
];

const Payment = () => {
    const paymentJSX = paymentData.map((elem, indx) => {
        return (
            <div
                className="w-25 bg-white position-relative ml-2 mr-2"
                key={indx}
            >
                <div className="bg-white icon_wrapper">
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={elem.icon}
                            className="fontAwesome"
                        />
                    </div>
                </div>
                <div className="pt-5">
                    <h4 className="text_center mb-2 mt-3">{elem.header}</h4>
                    <p className="text_center">{elem.paymentAbout}</p>
                </div>
            </div>
        );
    });
    return (
        <div className="wrapper_payment">
            <h1 className="h1">СПОСОБ ОПЛАТЫ</h1>
            <div className="d-flex justify-content-around pt-5 pb-5">
                {paymentJSX}
            </div>
        </div>
    );
};

export default Payment;
