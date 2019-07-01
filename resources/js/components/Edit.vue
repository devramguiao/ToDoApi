<template>
	<div>
		<div class="row">
			<div class="col-md-6 mx-auto">
				<h2>Edit Task</h2>
				<form @submit='onSubmit'>
					<div class="form-group">
						<label for="">Title</label>
						<input type="text" v-model='task.title' class="form-control" />
					</div>
					<div class="form-group">
						<label for="">Description</label>
						<textarea  v-model='task.description' rows="5" class="form-control"></textarea>
					</div>
					<div class="form-group">
						<button class="btn btn-primary">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data()
		{
			return {
				task: {
					_method: "PUT",
					title: "",
					description: "",
				}
			}
		},
		methods: {
			onSubmit(e)
			{
				e.preventDefault();

				const  self = this;

				const task_id = self.$route.params.task_id;

				const response = axios.post("http://todoapi.test/api/tasks/"+task_id, self.task,
					{
						headers: {
							'Authorization': localStorage.getItem('token')
						}
					})
				.then(function(data) {
					self.$router.push('/');
				});
			}
		},
		created()
		{
			const self = this;

			const task_id = self.$route.params.task_id;
			
			const response = axios.get("http://todoapi.test/api/tasks/" + task_id, {
					headers: {
						'Authorization': localStorage.getItem('token')
					}
				})
				.then(function(taskInfo) {
					self.task.title = taskInfo.data.title;
					self.task.description = taskInfo.data.description;
				});
		}
	}
</script>
