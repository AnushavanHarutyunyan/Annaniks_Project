import axios from 'axios';

const FoodsAPI = axios.create({
    baseURL: 'http://game.annaniks.com',
    responseType: 'json',
});

export default FoodsAPI;
