import Todo from './components/Todo';
import Create from './components/Create';
import Edit from './components/Edit';

export default {
	mode: "history",
	routes: [
		{
			path: '/',
			component: Todo,
			name: 'todo'
		},
		{
			path: '/create',
			component: Create,
			name: 'create'
		},
		{
			path: '/edit/:task_id',
			component: Edit,
			name: 'edit'
		}
	]
}