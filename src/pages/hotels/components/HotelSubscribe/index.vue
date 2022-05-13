<template>
	<section class="subscribe__newsletter">
		<h2 class="subscribe-title subscribe__newsletter-title">Подпишитесь на рассылку</h2>
			<p class="subscribe-descr subscribe__newsletter-descr">
				Только полезная информация и никакого спама, честное бойскаутское!
			</p>
			<form action="" class="form-control">
				<input type="email" placeholder="Ваш e-mail" class="form-input">
				<button class="btn_secondary">Подписаться</button>
			</form>
	</section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HotelSubscribe',
});
</script>

<style scoped>
	.subscribe__newsletter {
		text-align: center;
		padding: 60px 130px 138px;
		color: #000;
	}

	.subscribe__newsletter-descr {
		color: #333;
		padding: 0 101px;
	}
</style>
