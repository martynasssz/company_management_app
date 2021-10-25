import { createApp } from 'vue';

import App from './components/App.vue';

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App); //create application
app.use(PrimeVue); //istall PrimeVue

app.component('InputText', InputText); //component one
app.component('Button', Button); //component two
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);

app.mount("#example"); //add imported app //mount in id example
