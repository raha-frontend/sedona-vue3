<template>
	<div class="wrapper">
		<the-header />

		<hotel-filters />

		<div class="container">
			<hotel-sort />

			<hotel-item
				v-for="hotel in hotels"
				:key="hotel.id"
				:hotel="hotel"
			/>

			<hotel-more />

			<hotel-pagination />

			<hotel-subscribe />

			<the-footer />
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

import TheHeader from '../../components/TheHeader.vue'
import HotelFilters from './components/HotelFilters/index.vue'
import HotelSort from './components/HotelSort/index.vue'
import HotelItem from './components/HotelItem/index.vue'
import HotelMore from './components/HotelMore/index.vue'
import HotelPagination from './components/HotelPagination/index.vue'
import HotelSubscribe from './components/HotelSubscribe/index.vue'
import TheFooter from '../../components/TheFooter.vue'

export default defineComponent({
	name: 'HotelsPage',

	components: {
		TheHeader,
		HotelFilters,
		HotelSort,
		HotelItem,
		HotelMore,
		HotelPagination,
		HotelSubscribe,
		TheFooter
	},

	setup() {
		const hotels = ref([]);

		onMounted(() => {
			fetch('/api/v1/hotel')
				.then(response => response.json())
				.then(response => {
					hotels.value = response;
				})
		});

		return {
			hotels
		}
	}
})
</script>
