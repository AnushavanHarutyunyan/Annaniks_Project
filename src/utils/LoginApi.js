import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gov.annaniks.com',
    responseType: 'json',
});

export const setApiAuthorizationHeader = (token) => {
    api.defaults.headers.common.Authorization = token
        ? 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4MjY4OTUwLCJqdGkiOiJjMTQ5MTQwNjUwYmE0OTUwODY5YTdjMzg4ZDBjYmVkZCIsInVzZXJfaWQiOjE4OH0.ENMMjEaKk_PDSc3OPiz8szYesc4Lmikh_XVqVG6nEjI'
        : null;
};

// api.interceptors.response.use(
//     (response) => {
//         console.log(response, 'resp');
//         return response;
//     },
//     (error) => {
//         const statusCode = error.response.status;
//         if (statusCode === 401 || statusCode === 403) {
//             const token = localStorage.getItem('access');
//             api.defaults.headers.Authorization = token ? `Bearer ${token}` : '';
//         }
//     }
// );
export default api;
