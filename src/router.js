import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/home/index.vue';
import HotelsPage from './pages/hotels/index.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage
		},
	
		{
			path: '/hotels',
			component: HotelsPage
		}
	]
});

export default router;
