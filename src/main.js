// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// The site is now hosted under a sub-path (GitHub Pages project site).
// Build-time publicPath stays '/' so that prerender-spa-plugin's local server
// can load assets from root. At runtime (real browsers) we point lazy-loaded
// chunks to the sub-path. During prerendering/dev the pathname has no
// sub-path prefix, so the default '/' is kept.
if (window.location.pathname.indexOf('/uiv-website-v0') === 0) {
  __webpack_public_path__ = '/uiv-website-v0/'
}

import './assets/css/vender.less'
import './assets/css/common.less'

import 'es6-promise/auto'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import router from './router'
import PageWrapper from './components/architecture/PageWrapper.vue'
import MarkdownWrapper from './components/architecture/MarkdownWrapper.vue'
import * as uiv from 'uiv'
// import VueI18n from 'vue-i18n'
// import uivLocale from '@src/locale/lang/zh-CN'

Vue.config.productionTip = false

// Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(uiv)

// const messages = {
//   zh: uivLocale
// }
//
// const i18n = new VueI18n({
//   locale: 'zh',
//   messages
// })

// apply google analytics only on production mode
if (process.env && process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-102731925-3',
    router,
    autoTracking: {
      skipSamePath: true
    }
  })
}

Vue.component('MarkdownWrapper', MarkdownWrapper)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    // i18n,
    template: '<PageWrapper/>',
    components: {PageWrapper}
  }).$mount('#app')
})
