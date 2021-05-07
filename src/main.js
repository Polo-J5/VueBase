import Vue from 'vue' // 默认引入的就是 runtime-only 版本的，不带解析器
// import Vue from 'vue/dist/vue.esm.js' // 带有解析器的版本
import App from './App.vue'

Vue.config.productionTip = false

// /* eslint-disable no-unused-vars */
// 局部禁用当前这个类型的错误（只禁用当前文件的这个类型错误）

// 使用 render 函数时 为什么就可以使用  runtime-only 版本的 Vue ？
// 使用这种方式 打包出来文件体积小
new Vue({
  render: h => h(App),  // 1. 定义并注册 App  2. 使用了 App 组件  3. 比下面多了一步，寻找解析器的 loader
}).$mount('#app')

// [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. 
// Either pre-compile the templates into render functions, or use the compiler-included build.

// 我们现在默认导入的 Vue 是一个 runtime-only 版本的 Vue, 这个版本的 Vue 不带解析器
// new Vue({
//   el: '#app',
//   components: {
//     App,
//   },
//   template: '<App/>'
// })