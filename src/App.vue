<template>
	<router-view />
</template>

<script>
</script>

<style lang="scss">
@import url("./assets/styles/normalize.scss");
@import url("./assets/styles/stylequide.scss");
@import url("./assets/styles/media.scss");

* {
  padding: 0;
	margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "PT Sans", sans-serif;
  font-family: "Roboto", sans-serif;
}

h3 {
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	text-transform: uppercase;
}

button {
  text-transform: uppercase;
  cursor: pointer;
	border: none;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

label {
	cursor: pointer;
}

.wrapper {
  max-width: 1200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
}

.main__banner {
	background-image: url(./assets/images/banner-sedona.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	padding: 51px 0 82px 0;
	position: relative;
}

.main__banner::after {
	content: "";
	position: absolute;
	z-index: 2;
	left: 0;
	right: 0;
	bottom: 0;
	height: 57px;
	background-color: transparent;
	background-image: url(./assets/images/banner-mask.svg);
	background-repeat: no-repeat;
	background-position: 0 50%;
	background-size: 100% 57px;
}

.main__banner-text {
	display: block;
	margin: 0 auto;
}

.intro {	
	text-align: center;
	padding: 63px 120px 79px;
	line-height: 36px;
}

.intro-title {
	margin: 0;
	text-transform: uppercase;
	font-size: 30px;
}

.intro-subtitle {
	font-size: 22px;
	color: #333;
	margin-top: 23px;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, minmax(auto, 384px));
}

.grid-elem {
	background-color: rgba(131, 179, 211, 0.12);
	text-align: center;
}

.grid-elem:first-child,
.grid-elem:nth-child(7) {
	background-color: #83B3D3;
	padding: 98px 84px 77px;
	color: #fff;
}

.grid-elem:nth-child(2) {
	background-image: url(./assets/images/city-img.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	height: 384px;
	grid-column-start: 2;
	grid-column-end: 4;
}

.grid-elem:nth-child(4) {
	background-color: #fff;
}

.grid-elem:nth-child(6) {
	background-image: url(./assets/images/bridge-img.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	height: 384px;
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 4;
}

.grid-elem:nth-child(9) {
	background-color: rgba(131, 179, 211, 0.2);;
}

.grid-elem:nth-child(3),
.grid-elem:nth-child(4),
.grid-elem:nth-child(5) {
	padding: 184px 75px 79px;
}

.grid-elem:nth-child(8),
.grid-elem:nth-child(9),
.grid-elem:last-child {
	padding: 98px 74px 77px;
}

.grid-elem__title {
	margin-bottom: 20px;
}

.grid-elem__title-house,
.grid-elem__title-food,
.grid-elem__title-souvenir {
	position: relative;
}

.grid-elem__title::before {
	content: "";
	position: absolute;
	background-repeat: no-repeat;
	top: -110px;
	left: 50%;
	transform: translateX(-50%);
}

.grid-elem__title-house::before {
	background-image: url(./assets/images/house-icon.svg);
	width: 75px;
	height: 72px;
}

.grid-elem__title-food::before {
	background-image: url(./assets/images/food-icon.svg);
	width: 74px;
	height: 70px;
}

.grid-elem__title-souvenir::before {
	background-image: url(./assets/images/souvenir-icon.svg);
	width: 64px;
	height: 76px;
}

.grid-elem__descr {
	font-size: 18px;
	line-height: 21px;
	color: #333333;
}

.grid-elem__descr-white {
	color: #fff;
}

.grid-elem__number {
	display: block;
	margin: 30px 0 26px;
}

.interested {
	text-align: center;	
	padding: 90px 240px;
}

.interested-title {
	text-transform: uppercase;
	margin-bottom: 40px;
}

.interested-descr {
	font-size: 22px;
	line-height: 26px;
	color: #333;
	margin-bottom: 60px;
}

.subscribe {
	background-image: url(./assets/images/banner-email.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	height: 411px;
	color: #fff;
	padding: 90px 240px;
	text-align: center;
}

.subscribe-title {
	font-size: 30px;
	line-height: 36px;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 30px;
}

.subscribe-descr {
	font-size: 22px;
	line-height: 26px;
	padding: 0 65px;
	margin-bottom: 58px;
}

.form-control {
	display: flex;
	justify-content: center;
}

.social__list {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.social__list-item {
	padding: 15px;
}

.container {
	padding: 0 70px;
}

.section__border-bottom {
	border-bottom: 1px solid #E6E6E6;
}

</style>
