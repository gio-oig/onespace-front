import Api from './api';

export default {
	getPosts() {
		return Api.get('post/posts');
	},
	create(post) {
		return Api.post('post/create', post);
	},
	likePost({ userId, postId }) {
		return Api.post('post/like', { userId, postId });
	},
	deletePost({ postId }) {
		return Api.delete('post/delete/' + postId, { random: 'random' });
	},
};
