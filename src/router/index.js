import { createWebHistory, createRouter } from 'vue-router';

import MainComponent from '../components/layout/MainComponent.vue';
import HomeComponent from '../components/layout/HomeComponent.vue';
import MomentComponent from '../components/layout/MomentComponent.vue';
import CategoryComponent from '../components/layout/CategoryComponent.vue';
import RankComponent from '../components/layout/RankComponent.vue';
import DetailMenuComponent from '../components/layout/DetailMenuComponent.vue';

const routes = [
	{
		path: '/',
		component: MainComponent,
		children: [
			{ path: 'home', alias: '/', component: HomeComponent },
			{ path: 'moment', component: MomentComponent },
			{ path: 'category', component: CategoryComponent },
			{ path: 'rank', component: RankComponent }
		]
	},
	{
		path: '/detail',
		component: DetailMenuComponent
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;