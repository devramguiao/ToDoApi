<template>
	<div>
		<div class="row">
			<div class="col-md-10 mx-auto">
				<h2>My Todos</h2>
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
							<td></td>
							<td>
								<a href="#" class="btn btn-success">
									Done
								</a>
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


