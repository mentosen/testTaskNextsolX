import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import i18n from "@/utils/i18n";
import SvgIcon from 'vue-svgicon';
import HighchartsVue from 'highcharts-vue';

import '@/assets/styles.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app');

Vue.use(VueI18n);
Vue.use(SvgIcon, {tagName: 'svg-icon'});
Vue.use(HighchartsVue);