<template>
	<div class="page__navigation">
		<ul class="pagination__list">
		<li class="pagination__item"><a href="#" class="paginaion__link paginaion__link-active">1</a></li>
		<li class="pagination__item"><a href="#" class="paginaion__link">2</a></li>
		<li class="pagination__item"><a href="#" class="paginaion__link">3</a></li>
		<li class="pagination__item"><a href="#" class="paginaion__link">4</a></li>
		<li class="pagination__item"><a href="#" class="paginaion__link">...</a></li>
		<li class="pagination__item"><a href="#" class="paginaion__link">10</a></li>
	</ul>

	<div class="hotels__count">
		<label for="count" class="hotels__count-label">Гостиниц на странице:</label>
		<select name="" id="count" class="hotels__count-select">
			<option selected value="one">4</option>
			<option value="two">3</option>
			<option value="three">2</option>
			<option value="four">1</option>
		</select>
	</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HotelPagination',
});
</script>

<style scoped>
	.page__navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 0;
	}

	.pagination__list {
		display: flex;
		align-items: center;
	}

	.pagination__item {
		margin-right: 8px;
	}

	.paginaion__link {
		display: block;
		background-color: #83B3D3;
		font-size: 20px;
		color: #fff;
		width: 55px;
		padding: 18.3px 0;
		text-align: center;
		border-radius: 4px;
	}

	.paginaion__link:hover {
		background-color: #6AA3C8;
	}

	.paginaion__link:focus {
		box-shadow: 0 0 3px 3px #756257;
	}

	.paginaion__link:active {
		opacity: 0.3;
	}

	.paginaion__link-active{
		background-color: #F2F2F2;
		color: #000;
	}

	.paginaion__link-active:hover {
		background-color: #dadada;
	}

	.paginaion__link-active:focus {
		box-shadow: 0 0 3px 3px #756257;
	}

	.paginaion__link-active:active {
		opacity: 0.3;
	}

	.hotels__count {
		display: flex;
		align-items: center;
	}

	.hotels__count-label {
		font-size: 18px;
		color: #333;
		padding: 10px 50px 10px 10px;
	}

	.hotels__count-select {
		cursor: pointer;
		border: 2px solid #E6E6E6;
		width: 160px;
		height: 48px;
		border-radius: 4px;
		padding: 0 10px;
	}

	.hotels__count-select:hover, .hotels__count-select:focus{
		border: 2px solid #83b3d3;
	}

	.hotels__count-select:active {
		opacity: 0.3;
	}

</style>