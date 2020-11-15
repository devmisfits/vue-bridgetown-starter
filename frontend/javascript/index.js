import "../styles/index.scss"
import Vue from 'vue'
import HeaderNav from '../components/HeaderNav.vue'

const headerNav = new Vue({
    el: "#header-nav",
    template: "<HeaderNav/>",
    components: { HeaderNav },
})


console.info("Bridgetown is loaded!")

