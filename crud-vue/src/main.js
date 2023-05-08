import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/assets/Style/Style.css'
import Highcharts from 'highcharts';
import VueSweetalert2 from 'vue-sweetalert2'

import HighchartsVue from 'highcharts-vue';
import loadDrilldown from 'highcharts/modules/drilldown';
import HighchartsMore from 'highcharts/highcharts-more';
import loadExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

// Load required Highcharts modules
loadDrilldown(Highcharts);
loadExporting(Highcharts);
HighchartsMore(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);

// Register HighchartsVue component
Vue.use(HighchartsVue);
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
