<template>
	<section class="catalog__banner">
		<h1 class="catalog__title">Гостиницы Седоны</h1>

		<div class="catalog__links">
			<a href="#" class="catalog__link"></a>
			<span class="catalog__subtitle">Гостиницы</span>
		</div>

		<div class="catalog__content">
			<div class="infrastructure">
				<h2 class="infrastructure__title catalog__content-title">Инфраструктура:</h2>
				<div class="infrastructure__form">
					<input type="checkbox" id="swimming-pool" checked>
					<label for="swimming-pool">Бассейн</label>
				</div>
				<div class="infrastructure__form">
					<input type="checkbox" id="parking" checked>
					<label for="parking">Парковка</label>
				</div>
				<div class="infrastructure__form">
					<input type="checkbox" id="wi-fi" checked>
					<label for="wi-fi">Wi-Fi</label>
				</div>
			</div>

			<div class="type__house">
				<h2 class="type__house-title catalog__content-title">Тип жилья:</h2>
				<div class="type__house-form">
					<input type="radio" id="hotel" name="some-name" checked>
					<label for="hotel">Гостиница</label>
				</div>
				<div class="type__house-form">
					<input type="radio" id="motel" name="some-name" checked>
					<label for="motel">Мотель</label>
				</div>
				<div class="type__house-form">
					<input type="radio" id="apartments" name="some-name" checked>
					<label for="apartments">Апартаменты</label>
				</div>
			</div>

			<div class="price">
				<h2 class="price__title catalog__content-title">Стоимость, &#8381;:</h2>
				<div class="price__controls">
					<label for="min-price" class="min__price">
						<input type="text" id="min-price" value="0">
						<span class="price__text">от</span> 
					</label>
					<label for="max-price" class="max__price">
						<input type="text" id="max-price" value="9000">
						<span class="price__text">до</span>
					</label>
				</div>
				<div class="range__controls">
					<div class="scale">
						<div class="bar" style="width: 80%;"></div>
					</div>
					<button type="button" class="toggle toggle-min"></button>
					<button type="button" class="toggle toggle-max"></button>
				</div>
			</div>

			<div class="catalog__content-btn">
				<h2 class="fake__title catalog__content-title ">Кнопки</h2>
				<button class="btn_secondary catalog__content-first">Применить</button>
				<button class="catalog__content-second">Сбросить</button>
			</div>
		</div>
	</section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HotelFilters',
});
</script>

<style lang="scss" scoped>
$images-path: '../../../../assets/images';

.catalog__banner {
	background-image: url(#{$images-path}/catalog-banner.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	padding: 35px 66px 67px;
}

.catalog__title {
	font-size: 60px;
	line-height: 70px;
	color: #fff;
	margin: 0 7px;
}

.catalog__links {
	display: flex;
	align-items: center;
	margin-bottom: 45px;
}

.catalog__link {
	display: block;
	background-image: url(#{$images-path}//hotel-icon.svg);
	background-position: center;
	background-repeat: no-repeat;
	width: 12px;
	height: 12px;
	margin-right: 18px;
	padding: 15px 15px 0;
	position: relative;
}

.catalog__link::after {
	content: "";
	position: absolute;
	background-image: url(#{$images-path}/arrow-icon.svg);
	background-repeat: no-repeat;
	width: 5px;
	height: 8px;
	left: 33px;
	top: 50%;
	transform: translateY(-50%);
	opacity: 0.3;
}

.catalog__subtitle {
	font-size: 16px;
	line-height: 21px;
	color: #fff;
}

.catalog__content {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.catalog__content-title {
	font-size: 20px;
	line-height: 26px;
	color: #fff;
	margin-bottom: 30px;
}

.infrastructure__form,
.type__house-form {
	margin-bottom: 15px;
	font-size: 18px;
	line-height: 23px;
	color: #fff;
}

.infrastructure__form input {
	position: absolute;
  z-index: -1;
  opacity: 0;
}

.infrastructure__form input:checked + label::before {
	background-image: url(#{$images-path}/checkbox-checked.svg);
	background-repeat: no-repeat;
	width: 20px;
	height: 20px;
}

.infrastructure__form label {
	position: relative;
	padding-left: 40px;
}

.infrastructure__form label::before {
	content: "";
	position: absolute;
	background-image: url(#{$images-path}/checkbox-off.svg);
	background-repeat: no-repeat;
	width: 20px;
	height: 20px;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}

.infrastructure__form input:not(:disabled)+label:hover::before {
	opacity: 0.7;
}

.infrastructure__form input:not(:disabled):not(:checked)+label:hover::before {
	opacity: 0.7;
}

.infrastructure__form input:focus+label::before {
	box-shadow: 0 0 3px 3px #68A2CA;
	border-radius: 5px;
}

.infrastructure__form input:focus:not(:checked)+label::before {
	box-shadow: 0 0 3px 3px #68A2CA;
	border-radius: 5px;
}

.infrastructure__form input:not(:disabled):active+label::before {
	opacity: 0.5;
}

.type__house-form input {
	position: absolute;
  z-index: -1;
  opacity: 0;
}

.type__house-form input:checked + label::before {
	background-image: url(#{$images-path}/radio-checked.svg);
	background-repeat: no-repeat;
	width: 20px;
	height: 20px;
}

.type__house-form label {
	position: relative;
	padding-left: 40px;
}

.type__house-form label::before {
	content: "";
	position: absolute;
	background-image: url(#{$images-path}/radio-off.svg);
	background-repeat: no-repeat;
	width: 20px;
	height: 20px;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}

.type__house-form input:not(:disabled)+label:hover::before {
	opacity: 0.7;
}

.type__house-form input:not(:disabled):not(:checked)+label:hover::before {
	opacity: 0.7;
}

.type__house-form input:focus+label::before {
	box-shadow: 0 0 3px 3px #68A2CA;
	border-radius: 50%;
}

.type__house-form input:focus:not(:checked)+label::before {
	box-shadow: 0 0 3px 3px #68A2CA;
	border-radius: 50%;
}

.type__house-form input:not(:disabled):active+label::before {
	opacity: 0.5;
}

.price__controls {
	display: flex;
	align-items: center;
}

.min__price,
.max__price {
	border: 1px solid #fff;
	border-radius: 3px 0 0 3px;
	position: relative;
}

.min__price:hover,
.max__price:hover {
	border-color: rgba(255, 255, 255, 0.7);
}

.min__price input:focus,
.max__price input:focus {
	box-shadow: 0 0 3px 3px #68A2CA;
}

.min__price:active,
.max__price:active {
	background-color: #756257;
}

.max__price {
	border-radius: 0 3px 3px 0;
	border-left: none;
}

.min__price input,
.max__price input {
	background-color: inherit;
	border: none;
	padding: 13px 0 13px 16px;
	color: #fff;
	max-width: 143px;
}

.price__text {
	position: absolute;
	color: #fff;
	opacity: 0.5;
	right: 14px;
	top: 50%;
	transform: translateY(-50%);
}

.range__controls {
	position: relative;
	margin: 32px 0 0;
}

.scale {
	height: 2px;
	background-color: rgba(255, 255, 255, 0.3);
}

.bar {
	height: 2px;
	background-color: #fff;
}

.range__controls .toggle {
	position: absolute;
	cursor: pointer;
	background-color: #fff;
	width: 20px;
	height: 20px;
	border-radius: 5px;
	top: 50%;
	transform: translateY(-50%);
}

.range__controls .toggle:focus {
	box-shadow: 0 0 3px 3px #68A2CA;
}

.range__controls .toggle:active {
	box-shadow: 0 0 2px 2px #68A2CA;
}

.range__controls .toggle-max {
	left: 80%;
}

.fake__title {
	font-size: 0;
}

.catalog__content-first {
	display: block;
	border-radius: 5px;
	font-size: 16px;
	margin-bottom: 10px;
}
</style>
