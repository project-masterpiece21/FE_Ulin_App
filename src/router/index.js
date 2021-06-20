import { createWebHistory, createRouter } from 'vue-router';

import HomeComponent from '../components/layout/HomeComponent.vue';
import MomentComponent from '../components/layout/MomentComponent.vue';
import CategoryComponent from '../components/layout/CategoryComponent.vue';
import RankComponent from '../components/layout/RankComponent.vue';

const routes = [
	{
		path: '/',
		component: HomeComponent,
		children: [
			{ path: 'moment', component: MomentComponent },
			{ path: 'category', component: CategoryComponent },
			{ path: 'rank', component: RankComponent }
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;