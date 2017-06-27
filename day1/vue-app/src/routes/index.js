//定义路由
import HomeHeader from './../com/HomeHeader.vue';
import Home from './../com/Home.vue';
import KindHeader from './../com/KindHeader.vue';
import Kind from './../com/Kind.vue';
import CartHeader from './../com/CartHeader.vue';
import Cart from './../com/Cart.vue';
import UserHeader from './../com/UserHeader.vue';
import User from './../com/User.vue';
import DetailHeader from './../com/DetailHeader.vue';
import Detail from './../com/Detail.vue';
import MainFooter from './../com/MainFooter.vue';
import KindList from './../com/KindList.vue';
import SetUpHeader from './../com/SetUpHeader.vue';
import SetUp from './../com/SetUp.vue';
import SetUpFooter from './../com/SetUpFooter.vue';

const routes = [{
		path: "/home",
		components: {
			header: HomeHeader,
			content: Home,
			footer: MainFooter
		}
	},
	{
		path: "/kind",
		redirect: "/kind/kindlist/0"
	},
	{
		path: "/kind",
		components: {
			header: KindHeader,
			content: Kind,
			footer: MainFooter
		},
		children: [{
			path: "kindlist/:activekind",
			name: "kindlist",
			component: KindList
		}]
	},

	{
		path: '/cart',
		components: {
			header: CartHeader,
			content: Cart,
			footer: MainFooter
		}
	},
	{
		path: '/user',
		components: {
			header: UserHeader,
			content: User,
			footer: MainFooter
		}
	},
	{
		path: '/setUp',
		components: {
			header: SetUpHeader,
			content: SetUp,
			footer: SetUpFooter
		}
	},
	{
		path: '/login',
		components: {
			header: Login,
			content: SetUp,
			footer: SetUpFooter
		}
	},
	{
		path: "*",
		redirect: "/home"
	}
];
export default routes;