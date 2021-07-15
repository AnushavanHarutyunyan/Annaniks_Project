import API from '../../../utils/API';

class UserEP {
    routeName = 'users';

    getAll() {
        return API.get(`/users`).then(({ data }) => data); // `/${this.routeName}` es tarberagov chi ashxadi
    }
    getById(id) {
        return API.get(`/users/${id}`).then(({ data }) => data);
    }
}

export default new UserEP();
