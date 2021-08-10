import API from '../../../utils/API';
import LoginApi from '../../../utils/LoginApi';

class UserEP {
    // routeName = 'users';
    getAll() {
        return API.get(`/users`).then(({ data }) => data); // `/${this.routeName}` es tarberagov chi ashxadi
    }
    getById(id) {
        return API.get(`/users/${id}`).then(({ data }) => data);
    }
    submitLogin(loginData) {
        return LoginApi.post(`/users/login-user/`, loginData)
            .then(({ data }) => data)
            .catch((e) => {
                console.log('error handle', e.response);
            });
    }
    getMe() {
        return LoginApi.get(`/users/get-me/`)
            .then((data) => data)
            .catch((e) => console.log('error handle', e.response));
    }
}

export default new UserEP();
