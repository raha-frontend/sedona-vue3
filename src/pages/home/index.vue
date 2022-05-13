<template>
	<div class="wrapper">
		<the-header />

		<section class="main__banner">
			<img src="../../assets/images/text-sedona.svg" alt="text-sedona" class="main__banner-text">
		</section>

		<section class="intro">
			<h1 class="intro-title">
				Седона&nbsp;&mdash; небольшой городок в&nbsp;Аризоне, заслуживающий большего!
			</h1>
			<p class="intro-subtitle">
				Рассмотрим 5 причин, по которым Седона круче, чем Гранд-Каньон!
			</p>
		</section>

		<div class="grid-container">
			<div class="grid-elem">
				<h3 class="grid-elem__title">Настоящий городок</h3>
				<span class="grid-elem__number">&mdash;&nbsp;&#8470;1&nbsp;&mdash;</span>
				<p class="grid-elem__descr grid-elem__descr-white">
					Седона — не аттракцион<br>для туристов, там течёт<br>своя жизнь
				</p>
			</div>
			<div class="grid-elem "></div>
			<div class="grid-elem">
				<h3 class="grid-elem__title grid-elem__title-house">Жильё</h3>
				<p class="grid-elem__descr">
					Рекомендуем пожить<br>в настоящем мотеле,<br>всё как в кино!		
				</p>
			</div>
			<div class="grid-elem">
				<h3 class="grid-elem__title grid-elem__title-food">Еда</h3>
				<p class="grid-elem__descr">
					Всегда заказывайте топовый фирменный бургер, вы не разочаруетесь!
				</p>
			</div>
			<div class="grid-elem">
				<h3 class="grid-elem__title grid-elem__title-souvenir">Сувениры</h3>
				<p class="grid-elem__descr">
					Не только китайского,<br>но и настоящего местного<br>производства!
				</p>
			</div>
			<div class="grid-elem"></div>
			<div class="grid-elem">
				<h3 class="grid-elem__title">Там есть мост дьявола</h3>
				<span class="grid-elem__number">&mdash;&nbsp;&#8470;2&nbsp;&mdash;</span>
				<p class="grid-elem__descr grid-elem__descr-white">
					Да, по нему можно пройти!<br>Если вы осмелитесь,<br>разумеется
				</p>
			</div>
			<div class="grid-elem">
				<h3 class="grid-elem__title">Небольшая площадь</h3>
				<span class="grid-elem__number">&mdash;&nbsp;&#8470;3&nbsp;&mdash;</span>
				<p class="grid-elem__descr">
					Все достопримечательности<br>находятся очень близко
				</p>
			</div>
			<div class="grid-elem">
				<h3 class="grid-elem__title">Красивая<br>дорога</h3>
				<span class="grid-elem__number">&mdash;&nbsp;&#8470;4&nbsp;&mdash;</span>
				<p class="grid-elem__descr">
					Ехать в Седону из Лас-Вегаса<br>совсем не скучно!
				</p>
			</div>
			<div class="grid-elem">
				<h3 class="grid-elem__title">Мало<br>туристов</h3>
				<span class="grid-elem__number">&mdash;&nbsp;&#8470;5&nbsp;&mdash;</span>
				<p class="grid-elem__descr">
					Большинство едет в Гранд<br>Каньон и толпится там
				</p>
			</div>
		</div>

		<section class="interested">
			<h2 class="interested-title">Заинтересовались?</h2>
			<p class="interested-descr">
				Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в Седоне
			</p>
			<button class="btn interested__btn">Поиск гостиницы в седоне</button>
		</section>

		<div class="subscribe">
			<h2 class="subscribe-title">Подпишитесь на рассылку</h2>
			<p class="subscribe-descr">
				Только полезная информация и никакого спама, честное бойскаутское!
			</p>
			<form action="" class="form-control">
				<input type="email" placeholder="Ваш e-mail" class="form-input">
				<button class="btn_secondary">Подписаться</button>
			</form>
		</div>

		<the-footer />

	</div>
</template>

<script>
import { defineComponent } from 'vue';

import TheHeader from '../../components/TheHeader.vue';
import TheFooter from '../../components/TheFooter.vue'

export default defineComponent({
	name: 'HomePage',

	components: {
		TheHeader,
		TheFooter
	}
});
</script>
