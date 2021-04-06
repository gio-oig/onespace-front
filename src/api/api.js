import axios from 'axios';

let Api = axios.create({
	baseURL: 'http://localhost:5000/api',
});

Api.defaults.withCredentials = true;

export default Api;
