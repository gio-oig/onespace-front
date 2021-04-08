<template>
	<div class="comment-container">
		<div class="comment">
			<div class="comment-author-avatar">
				<img
					v-if="comment.author.image"
					:src="
						'https://arcane-bayou-45011.herokuapp.com/uploads/images/' +
							comment.author.image
					"
					alt=""
				/>
				<img v-else src="@/assets/unknown.jpg" alt="" />
			</div>
			<div class="comment-content-container">
				<div class="comment-author">{{ comment.author.name }}</div>
				<div class="comment">
					{{ comment.content }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Comment',
	props: {
		comment: Object,
	},
};
</script>

<style>
.comment-container {
	padding-left: 30px;
	background-color: #fff;
}
.comment {
	display: flex;
}

.comment-author-avatar {
	min-width: 35px;
	max-width: 35px;
	max-height: 35px;
	margin-right: 10px;
	border-radius: 100px;
	overflow: hidden;
	border: 1px solid rgb(212, 212, 212);
}

.comment-author-avatar img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.comment-author {
	font-weight: 600;
}

.comment {
	margin: 5px 0;
	font-size: 15px;
}
</style>
