import "./bootstrap";
import router from "./router";
import { createApp } from "vue";

import App from "./App.vue";
import Head from "./Pages/Include/Head.vue";
import Footer from "./Pages/Include/Footer.vue"

const app = createApp(App);

// Register the router
app.use(router);

// Register global components
app.component('Header', Head);
app.component('Footer', Footer);

// Mount the app
app.mount("#app");