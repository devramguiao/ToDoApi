<template>
	<div>
		<div class="row">
			<div class="col-md-6 mx-auto">
				<h2>Create New Task</h2>
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
							Add
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
				task: {}
			}
		},
		methods: {
			onSubmit(e)
			{
				e.preventDefault();

				const  self = this;

				const response = axios.post("http://todoapi.test/api/tasks", self.task,
					{
						headers: {
							'Authorization': localStorage.getItem('token')
						}
					})
				.then(function(data) {
					self.$router.push('/');
				});
			}
		}
	}
</script>
