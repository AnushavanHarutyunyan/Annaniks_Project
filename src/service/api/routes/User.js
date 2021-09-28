import API from '../../../utils/API';
import LoginApi from '../../../utils/LoginApi';

class UserEP {
    getAll() {
        return API.get(`/users`).then(({ data }) => data); // `/${this.routeName}` es tarberagov chi ashxadi
    }
    getById(id) {
        return API.get(`/users/${id}`).then(({ data }) => data);
    }
    submitLogin(loginData) {
        return LoginApi.post(`/user_login`, loginData)
            .then((response) => response)
            .catch((e) => {
                console.log('error handle', e.response);
            });
    }
    submitRegistration(signUpDataPart) {
        return LoginApi.post('/create_conf_code', signUpDataPart)
            .then((response) => response.data)
            .catch((e) => {
                console.log('error handle SubmitRegistration', e.response);
            });
    }
    registeredUser(signUpData) {
        return LoginApi.post('/register_user', signUpData)
            .then((response) => response)
            .catch((error) => {
                if (error.response) {
                    console.log('error response', error.response);
                } else if (error.request) {
                    console.log('error reques', error.request);
                } else {
                    console.log('error message', error.message);
                }
            });
    }
    getMe() {
        return LoginApi.get(`/users/`)
            .then((data) => data)
            .catch((e) => console.log('error handle getMe', e.response));
    }
}

export default new UserEP();
