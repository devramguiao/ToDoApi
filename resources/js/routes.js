import Todo from './components/Todo';
import Create from './components/Create';
import Edit from './components/Edit';

export default {
	mode: "history",
	routes: [
		{
			path: '/',
			component: Todo
		},
		{
			path: '/create',
			component: Create
		},
		{
			path: '/edit',
			component: Edit
		}
	]
}