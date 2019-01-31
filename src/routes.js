import App from './App.vue';
import AddWhisky from './AddWhisky.vue';
import LoggedWhisky from './LoggedWhisky.vue';

export default [
	{ 
	 path: '/',
	 component: App
	},
	{
	 path: '/add', 
	 component: AddWhisky
	},
	{ 
	path: '/collection', 
	component: LoggedWhisky
}
]