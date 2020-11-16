import "../styles/index.scss"
import Vue from 'vue'
import HeaderNav from '../components/HeaderNav.vue'
import Swup from 'swup'

const swup = new Swup()

var vue1 = new Vue({
    el: "#header-nav",
    template: "<HeaderNav/>",
    components: { HeaderNav },
})

console.info("Bridgetown is loaded!")

