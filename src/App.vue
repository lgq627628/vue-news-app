<template>
  <div id="app">
  	<Loading v-show='loading'></Loading>
   	<NavView v-show='headerShow'></NavView>
   	<transition name='tab'>
   		<router-view></router-view>
   	</transition>
   	<FooterView v-show='footerShow'></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'

import {mapGetters,mapActions} from 'vuex'
export default {
	computed: mapGetters([
		'headerShow',
		'footerShow',
		'loading'
	]),
	watch: {
		$route(to,from) {
			if(to.path=='/user-info' || to.path=='/user-reg' || to.path=='/user-login'){
				this.$store.dispatch('hideHeader')
			}else if(to.path=='/article/:id'){
				this.$store.dispatch('hideFooter')
			}else{
				this.$store.dispatch('showHeader')
				this.$store.dispatch('showFooter')
			}
		}
	},
	components: {
		NavView,
		FooterView
	}
}
</script>

<style>
	.tab-enter-active,.tab-leave-active{
		transition: .4s all ease;
		opacity: 0.6;
		transform: translate3d(0,6em,0);
	}
	.tab-enter,.tab-leave{
		opacity: 1;
		transform: translate3d(0,6em,0);
	}
</style>
