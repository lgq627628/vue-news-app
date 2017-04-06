const LoadingComponent = require('./Loading.vue')
const Loading = {
  install: function(Vue) {
    Vue.component('Loading', LoadingComponent)
  }
}
module.exports = Loading

