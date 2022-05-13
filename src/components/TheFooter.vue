<template>
	<div class="footer">
		<div class="social__list">
				<a href="#" class="social-twitter social_link"></a>
				<a href="#" class="social-facebook social_link"></a>
				<a href="#" class="social-youtube social_link"></a>
		</div>

		<a href="tel:+78128121212" class="footer-number">+7 (812) 812-12-12</a>
		<a href="#" class="html-academy"></a>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TheFooter'
})
</script>

<style scoped>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 70px;
	}
</style>


