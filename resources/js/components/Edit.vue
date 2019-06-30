<template>
	<div>
		<div class="row">
			<div class="col-md-6 mx-auto">
				<h2>Edit Task</h2>
				<form @submit='onSubmit'>
					<input type="text" v-model='task._method' value="PUT" class="form-control" />
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
							Edit
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
				
			}
		},
		created()
		{
			const self = this;

			// to get the parameter id in the URL
			var task_id = self.$route.params.id;

			// to set value in for data-model binding
			self.task.title = "This is a title";
			self.task.description = "This is a description";
		}
	}
</script>
