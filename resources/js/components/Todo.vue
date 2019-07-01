<template>
	<div>
		<div class="row">
			<div class="col-md-10 mx-auto">
				<h2>My Todos</h2>
				

				<router-link :to='{ name: "create" }' class="btn btn-primary">
					Create	
				</router-link>

				<table class="table">
					<thead>
						<tr>
							<th>Task</th>
							<th>Description</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for='todo in todos'>
							<td>{{ todo.title }}</td>
							<td>{{ todo.description }}</td>
							<td>
								<span v-if="todo.status == 1" class="badge badge-success">Done</span>

								<span v-if="todo.status == 0" class="badge badge-warning">Pending</span>
							</td>
							<td>
								<a href="javascript:void(0)" @click="setToDone(todo.id)" class="btn btn-success" v-if='todo.status == 0'>
									Done
								</a>

								<router-link :to="{name: 'edit', params: { task_id: todo.id }}" class='btn btn-primary'>
									Edit
								</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				todos: []
			}
		},
		methods: {
			setToDone(todo_id)
			{
				const self = this;

				const response = axios.post('http://todoapi.test/api/tasks/'+todo_id,
						{
							_method: "PUT",
							'status': 1
						},
						{
							headers: {
								'Authorization': localStorage.getItem('token')
							}
						}
					).then(function(data) {
						axios.get('http://todoapi.test/api/tasks', {
							headers: {
								'Authorization': localStorage.getItem('token')
							}
						}).then(function(data) {
							self.todos = data.data;
						});
					});
			}
		},
		async created()
		{
			const self = this;

			const response = await axios.get('http://todoapi.test/api/tasks', {
				headers: {
					'Authorization': localStorage.getItem('token')
				}
			}).then(function(data) {
				self.todos = data.data;
			}).catch(function(e) {

			});
		}
	}
</script>


