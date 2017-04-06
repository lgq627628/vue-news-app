import getters from './getters'

const state={
	header: true,
	footer:true,
	loading: false
};

const mutations={
	showHeader(state){
		state.header=true
	},
	hideHeader(state){
		state.header=false
	},
	showFooter(state){
		state.footer=true
	},
	hideFooter(state){
		state.footer=false
	},
	showLoading(state){
		state.loading=true
	},
	hideLoading(state){
		state.loading=false
	}
};

export default {
	state,
	mutations,
	getters
}