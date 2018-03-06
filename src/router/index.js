import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import OurWork from '@/components/OurWork'
import AboutUs from '@/components/AboutUs'
import Vuetify from 'vuetify'
import vueHeadful from 'vue-headful'

Vue.use(Router);
Vue.use(Vuetify);

Vue.component('vue-headful', vueHeadful);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '/our-work',
			name: 'OurWork',
			component: OurWork
		},
		{
			path: '/about-us',
			name: 'AboutUs',
			component: AboutUs
		}
	]
})
