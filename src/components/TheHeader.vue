<template>
	<header class="header">
			<ul class="header-menu">
				<li class="header-menu__item">
					<router-link to="/" class="header-menu__link">Главная</router-link>
				</li>
				<li class="header-menu__item">
					<a href="#" class="header-menu__link">О Седоне</a>
				</li>
				<li class="header-menu__item">
					<router-link to="/hotels" class="header-menu__link">Гостиницы</router-link>
				</li>
			</ul>

			<div class="header__buttons">
				<button class="header__buttons-search header__button"></button>
				<button class="header__buttons-likes header__button">
					<span class="header__button-count">12</span>
				</button>
				<button class="btn">Хочу сюда!</button>
			</div>
		</header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TheHeader'
})
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 72px;
  position: relative;
}

.header::before {
  content: "";
  position: absolute;
  background-image: url(../assets/images/sedona-header-icon.svg);
  background-repeat: no-repeat;
  width: 138px;
  height: 70px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
	z-index: 1;
}

.header-menu {
  display: flex;
  align-items: center;
	flex-grow: 0;
}

.header-menu__item {
  margin-right: 15px;
}

.header-menu__item:last-child {
  margin-right: 0;
}

.router-link-exact-active::after {
	content: "";
	position: absolute;
	background-color: #756257;
	height: 2px;
	bottom: -14px;
	left: 7px;
	right: 7px;
}

.header__buttons {
	display: flex;
	align-items: center;
}
</style>