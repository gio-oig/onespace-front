<template>
	<div class="row">
		<picker :data="emojiIndex" set="twitter" @select="showEmoji" />
	</div>

	<div class="row">
		<div>
			{{ emojisOutput }}
		</div>
	</div>
</template>

<script>
// Import data/twitter.json to reduce size, all.json contains data for
// all emoji sets.
import data from 'emoji-mart-vue-fast/data/all.json';
// Import default CSS
import 'emoji-mart-vue-fast/css/emoji-mart.css';

import { Picker, EmojiIndex } from 'emoji-mart-vue-fast/src';

// Create emoji data index.
// We can change it (for example, filter by category) before passing to the component.
let emojiIndex = new EmojiIndex(data);

export default {
	name: 'Emoji',
	emits: ['emoji'],
	components: {
		Picker,
	},

	data() {
		return {
			emojiIndex: emojiIndex,
			emojisOutput: '',
		};
	},

	methods: {
		showEmoji(emoji) {
			this.emojisOutput = this.emojisOutput + emoji.native;
			this.$emit('emoji', this.emojisOutput);
			this.emojisOutput = '';
		},
	},
};
</script>

<style>
.row {
	display: flex;
	position: absolute;
	z-index: 50;
}
.row > * {
	margin: auto;
}
</style>
