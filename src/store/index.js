import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			user: null,
			activeUsers: [],
			posts: [],
			messengerStatus: false,
			chattingWith: '',
		};
	},
	mutations: {
		setUser(state, userData) {
			state.user = userData;
		},
		setActiveUsers(state, usersData) {
			state.activeUsers = usersData;
		},
		setPosts(state, posts) {
			state.posts = posts;
		},
		addPost(state, post) {
			state.posts = [post, ...state.posts];
		},
		setComment(state, comment) {
			state.posts = state.posts.map((post) => {
				if (post.id === comment.post) {
					post.comments.unshift(comment);
				}
				return post;
			});
		},
		likePost(state, postId) {
			state.posts = state.posts.map((post) => {
				// find post to like
				if (post.id === postId) {
					// check if user already liked it
					if (post.likes.includes(state.user.id)) {
						// find user id index in liked users list
						const index = post.likes.indexOf(state.user.id);
						// copy list and remove a user id from the list
						const likes = [...post.likes];
						likes.splice(index, 1);

						return {
							...post,
							likes: [...likes],
						};
					} else {
						// otherwise , just add a new user id in the list
						return {
							...post,
							likes: [state.user.id, ...post.likes],
						};
					}
				}
				return post;
			});
		},
		deletePost(state, postId) {
			state.posts = state.posts.filter((post) => post.id !== postId);
		},
		setMessengerStatus(state) {
			state.messengerStatus = !state.messengerStatus;
		},
		setChattingWith(state, userId) {
			state.chattingWith = userId;
		},
	},
});

export default store;
