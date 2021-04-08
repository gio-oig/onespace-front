import axios from 'axios';

let Api = axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? 'https://arcane-bayou-45011.herokuapp.com/api'
			: 'http://localhost:5000/api',
});

// Access-Control-Allow-Credentials: true
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

Api.defaults.withCredentials = true;
Api.defaults.headers.common = {
	Authorization: localStorage.getItem('token') || '',
};

export default Api;
