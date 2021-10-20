import FoodsAPI from '../../../utils/FoodsAPI';
import LoginApi from '../../../utils/LoginApi';

class UserEP {
    getFoods(payload) {
        return FoodsAPI.get(`/foods/`, { params: payload }).then(
            ({ data }) => data.results,
            (e) => {
                throw e;
            }
        ); // `/${this.routeName}` es tarberagov chi ashxadi
    }
    getById(id) {
        return FoodsAPI.get(`/foods/?food_type=${id}`).then(
            ({ data }) => data.results,
            (e) => {
                throw e.response.data;
            }
        );
    }
    submitLogin(loginData) {
        return LoginApi.post(`/user_login`, loginData).then(
            (response) => response,
            (e) => {
                throw e;
            }
        );
    }
    submitRegistration(signUpDataPart) {
        return LoginApi.post('/create_conf_code', signUpDataPart).then(
            (resolve) => resolve.data,
            (e) => {
                throw e;
            }
        );
    }
    registeredUser(signUpData) {
        return LoginApi.post('/register_user', signUpData).then(
            (response) => response,
            (e) => {
                throw e;
            }
        );
    }
    getMe() {
        return LoginApi.get(`/users/`).then(
            (data) => {
                // const user = JSON.parse(localStorage.getItem('user'));
                return data;
            },
            (e) => {
                throw e;
            }
        );
    }
    getFoodCategoriesNames() {
        return FoodsAPI.get('/food_categories/').then(
            ({ data }) => data.results,
            (e) => {
                throw e;
            }
        );
    }
    getFoodCategories(foodCategoriesName) {
        return FoodsAPI.post('/food_categories/', foodCategoriesName).then(
            ({ data }) => data,
            (e) => {
                throw e;
            }
        );
    }
    getFoodsTypesNames() {
        return FoodsAPI.get('/food_types/').then(
            ({ data }) => data.results,
            (e) => {
                throw e;
            }
        );
    }
}

export default new UserEP();
