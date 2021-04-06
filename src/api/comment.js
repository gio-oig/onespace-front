import Api from './api';

export default {
	create(comment) {
		return Api.post('comment/create', comment);
	},
};
