/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";

new Vue({
    render: h => h(ExampleComponent),
}).$mount("#app");
