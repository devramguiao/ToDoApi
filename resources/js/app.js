import VueRouter from 'vue-router';
import routes from './routes';

window.Vue = require('vue');

Vue.use(VueRouter);

localStorage.setItem('token', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJhZDRmMjk2ZTkzZjdiZmM4ZTIzZDdlYTY0MmEyNWVhZDg3ZWI1NTgzNDU1ZGNmZmJiODhlZjJmZDVhZDBjMjUwMGUzYjBjYWQyZTdlYzM3In0.eyJhdWQiOiIyIiwianRpIjoiYmFkNGYyOTZlOTNmN2JmYzhlMjNkN2VhNjQyYTI1ZWFkODdlYjU1ODM0NTVkY2ZmYmI4OGVmMmZkNWFkMGMyNTAwZTNiMGNhZDJlN2VjMzciLCJpYXQiOjE1NjE4NjQyOTMsIm5iZiI6MTU2MTg2NDI5MywiZXhwIjoxNTkzNDg2NjkzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Esm7xEM4sa9KwPeQSH-abBALi4gwyUSBaSgiEAlymj1EGZcsaYGV2DQOPnIYblUnoY_ssPaQqhVI5nc4I7ssKd2c_mt8D8CvQ6qTf1Xq-uwv419kKE0pcHj9mXRwvap4P0cjtzdfLOg-zF6pJkytsqf6P46drYk1JELmWGnYdCHFIsdFQQBE-ZkJHWsoJg_kC3NkjHvHO1OekuIMq2FxQ8-JZPbSksd2sAj0Bjg5EeWexLuIPxw5xSK0vpkUzqrQeCfOHDYZ5Ec5h1OVBjcpCY-Q2pTK8QAryGJELaQLbR0ssq-GBJmIdB_FyQnVbaHE5U2mvmyYitC9qbOCw70wDfepOFDYsqOW3COET_IEy4dyJrQxpk1AVEXJLSHs7JguEbSWQ9I2EVAZ555efa59wkq_rXgA4rXV_-2twqD0lDcO3hBPCUsUIIIOk9e0FtQTE81M_hYTvKWoA_rTHjjxrdY1oLCnU1Ba0TtwkFI9zXTqRVAamgPgwi_DTgj6ePK7yT8bab6IW4p6e3gUPca9P0qdzbUpzsTeDqi1h790M2pLKKBsp_4IUqsHmMKUGtsEPS2onE4s5rphjT9zfgUgBaSwkDjybfWhUX02JOPZsYp2lWWmbIi2ErH3OJYRCkhN7BcFguzE8NCov0SEHMlKSdvroQCObrrTQOJrZR_Y5fc');

const app = new Vue({
    el: '#app',
	router: new VueRouter(routes)
});
	