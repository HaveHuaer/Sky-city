import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/index',
			name: 'index',
			component: () => import('../views/IndexView.vue')
		},
		// 探索
		{
			path: '/explore',
			name: 'explore',
			component: () => import('../views/ExploreView.vue')
		},
		// 标签
		{
			path: '/label',
			name: 'label',
			component: () => import('../views/LabelView.vue')
		},
		// 摄影师
		{
			path: '/phon',
			name: 'phon',
			component: () => import('../views/PhoView.vue')
		},
		// 签约摄影师
		{
			path: '/conphon',
			name: 'conphon',
			component: () => import('../views/ConvView.vue')
		},
		// 热门活动
		{
			path: '/hot',
			name: 'hot',
			component: () => import('../views/HotView.vue')
		},
		// 天空之城
		{
			path: '/skycity',
			name: 'skycity',
			component: () => import('../views/SkyCity.vue')
		},
		{
			path: '/',
			redirect: "/index"
		}
	]
})

export default router
