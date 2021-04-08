import axios from 'axios';

let Api = axios.create({
	baseURL: 'http://localhost:5000/api',
});

// Access-Control-Allow-Credentials: true
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

Api.defaults.withCredentials = true;
Api.defaults.headers.common = {
	Authorization: localStorage.getItem('token') || '',
};

export default Api;
