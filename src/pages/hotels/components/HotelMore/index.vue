<template>
	<section class="loading__more section__border-bottom">
		<button class="loading__more-btn btn_secondary">Загрузить ещё</button>
	</section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HotelMore',
});
</script>

<style scoped>
.loading__more {
	padding: 30px 0;
}

.loading__more-btn {
	display: block;
	margin: 0 auto;
	border-radius: 4px;
	padding: 16px 226px;
}
</style>
