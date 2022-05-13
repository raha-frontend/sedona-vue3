<template>
	<section	class="hotels__content section__border-bottom">
		<div class="hotels__info">
			<div class="hotels__img">
				<img :src="hotel.imagePath" alt="hotel-1">
			</div>

			<div class="hotels__descr">
				<h3 class="hotels__name">{{ hotel.title }}</h3>
				<div class="hotels__price">
					<span class="hotels__span">{{ getHotelTranslatedType(hotel.type) }}</span>
					<span class="hotels__span">{{ hotel.price }} ₽</span>
				</div>
				<div class="hotels__descr-btns">
					<button v-if="false" class="hotels__more-btn btn">Подробнее</button>
					<button class="hotels__favorites-btn btn_secondary">В избранное</button>
				</div>
			</div>
		</div>

		<div class="hotels__raiting">
			<div class="hotels__raiting-stars">
				<img
					v-for="i in hotel.starCount"
					:key="i"
					src="../../../../assets/images/raiting-star.svg"
					alt=""
				>
			</div>
			<div class="hotels__raiting-number">Рейтинг: {{ hotel.rating }}</div>
		</div>
	</section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HotelItem',

	props: {
		hotel: {
			type: Object,
			default: () => ({})
		}
	},

	setup() {
		const getHotelTranslatedType = (type) => {
			switch(type) {
				case 'hotel':
					return 'Гостиница';
				case 'motel':
					return 'Мотель';
				case 'apartments':
					return 'Апартаменты';
				default:
					return '-'
			}
		};

		return {
			getHotelTranslatedType
		}
	}
});
</script>

<style lang="scss" scoped>
.hotels__content {
	padding: 30px 0;
}

.hotels__content {
	display: flex;
	justify-content: space-between;
}

.hotels__info {
	display: flex;
}

.hotels__img {
	margin-right: 36px;
}

.hotels__img img {
	display: block;
}

.hotels__name {
	text-align: left;
	font-size: 24px;
	text-transform: capitalize;
}

.hotels__price {
	display: flex;
	align-items: center;
}

.hotels__span {
	display: block;
	font-size: 18;
	color: #333333;
	margin: 0 78px 31px 0;
}

.hotels__more-btn {
	margin: 0 8px 0 0;
}

.hotels__favorites-btn {
	font-size: 16px;
	padding: 10px 30px;
	border-radius: 4px;
}

.hotels__raiting {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
}

.hotels__raiting-number {
	text-transform: uppercase;
	color: #333333;
	background-color: #F2F2F2;
	padding: 10px 30px;
	border-radius: 4px;
}

.hotels__raiting-stars {
	margin: 0 auto;
}

.hotels__raiting-stars img {
	margin: 0 2px;
}

</style>
